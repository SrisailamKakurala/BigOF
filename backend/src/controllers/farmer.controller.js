const asyncHandler = require('../utils/asyncHandler')
const {ApiError} = require('../utils/ApiError')
const {ApiResponse} = require('../utils/ApiResponse')
const uploadOnCloudinary = require('../utils/cloudinary')
const farmerModel = require('../models/farmer.model')


const generateAccessAndRefreshToken = async (userId) => {
    try{
        const farmer = await farmerModel.findById(userId)
        const accessToken = farmer.generateAccessToken()
        const refreshToken = farmer.generateRefreshToken()

        farmer.refreshToken = refreshToken
        await farmer.save({validateBeforeSave: false})

        return {accessToken, refreshToken}

    }catch(err){
        throw new ApiError(500, 'something went wrong while generating access and refresh token')
    }
}


const registerFarmer = asyncHandler( async (req, res) => {
    // get user dets from frontend
    // validation - not empty
    // check if user already exists: username, email
    // check for profile
    // upload to cloudinary and check if uploaded
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return response

    const { fullName, mobileNumber, password, address, aadharNumber } = req.body
    console.log(fullName, mobileNumber); 

    if([fullName, mobileNumber, password, address, aadharNumber].some((field) => field?.trim() === '')){
        throw new ApiError(400, 'All Fields are required')
    }

    const existedFarmer = await farmerModel.findOne({aadharNumber: aadharNumber})

    if(existedFarmer) {
        throw new ApiError(409, 'User already exists')
    }

    console.log(req.file)

    const profilePictureLocalPath = req.file?.path;

    if(!profilePictureLocalPath){
        throw new ApiError(400, 'Profile picture is required')
    }

    const profile = await uploadOnCloudinary(profilePictureLocalPath)

    if(!profile){
        throw new ApiError(400, 'Profile picture is required')
    }

    const Farmer = await farmerModel.create({
        fullName,
        mobileNumber,
        password,
        address,
        aadharNumber,
        profilePicture: profile?.url || '',
    })

    const createdFarmer = await farmerModel.findById(Farmer._id).select(
        '-password -refreshToken',
    )

    if(!createdFarmer) {
        throw new ApiError(500, 'Error registering the user')
    }


    return res.status(200).json(
        new ApiResponse(200, createdFarmer, 'user registered successfully')
    )
} )


const loginFarmer = asyncHandler( async (req, res) => {

    const { fullName, password, mobileNumber } = req.body

    if(!(fullName || password || mobileNumber)) {
        throw new ApiError(400, 'All fields are required')
    }

    const farmer = await farmerModel.findOne({ $or: [{fullName}, {mobileNumber}]})

    if(!farmer) {
        throw new ApiError(404, 'user not found')
    }

    const passwordCorrect = await farmer.isPasswordCorrect(password)

    if(!passwordCorrect) {
        throw new ApiError(400, 'incorrect password')
    }

    const {accessToken, refreshToken} = await generateAccessAndRefreshToken(farmer._id)

    const options = {
        httpOnly: true,
        secure: true,
    }

    return res
    .status(200)
    .cookie('accessToken', accessToken, options)
    .cookie('refreshToken', refreshToken, options)
    .json(
        new ApiResponse(
            200,
            {
                user: farmer, accessToken, refreshToken
            },
            'user logged in successfully'
        )
    )


} )


const logoutFarmer = asyncHandler( async (req, res) => {
    await farmerModel.findByIdAndUpdate(
        req.user._id,
        {
            $set: {
                refreshToken: undefined,
            }
        },
        {
            new: true,
        }
    )

    const options = {
        httpOnly: true,
        secure: true,
    }

    return res
    .status(200)
    .clearCookie('accessToken', options)
    .clearCookie('refreshToken', options)
    .json(new ApiResponse(200, {}, 'User logged out'))
} )


module.exports = {registerFarmer, loginFarmer, logoutFarmer}