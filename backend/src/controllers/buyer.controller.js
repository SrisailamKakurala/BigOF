const asyncHandler = require('../utils/asyncHandler')
const {ApiError} = require('../utils/ApiError')
const {ApiResponse} = require('../utils/ApiResponse')
const uploadOnCloudinary = require('../utils/cloudinary')
const buyerModel = require('../models/buyer.model')


const generateAccessAndRefreshToken = async (userId) => {
    try{
        const buyer = await buyerModel.findById(userId)
        const accessToken = buyer.generateAccessToken()
        const refreshToken = buyer.generateRefreshToken()

        buyer.refreshToken = refreshToken
        await buyer.save({validateBeforeSave: false})

        return {accessToken, refreshToken}

    }catch(err){
        throw new ApiError(500, 'something went wrong while generating access and refresh token')
    }
}


const registerBuyer = asyncHandler( async (req, res) => {
    // get user dets from frontend
    // validation - not empty
    // check if user already exists: username, email
    // check for profile
    // upload to cloudinary and check if uploaded
    // create user object - create entry in db
    // remove password and refresh token field from response
    // check for user creation
    // return response

    const { fullName, mobileNumber, password, address, email } = req.body
    console.log(fullName, mobileNumber); 

    if([fullName, mobileNumber, password, address, email].some((field) => field?.trim() === '')){
        throw new ApiError(400, 'All Fields are required')
    }

    const existedBuyer = await buyerModel.findOne({email: email})

    if(existedBuyer) {
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

    const Buyer = await buyerModel.create({
        fullName,
        mobileNumber,
        password,
        address,
        email,
        profilePicture: profile?.url || '',
    })

    const createdBuyer = await buyerModel.findById(Buyer._id).select(
        '-password -refreshToken',
    )

    if(!createdBuyer) {
        throw new ApiError(500, 'Error registering the user')
    }


    return res.status(200).json(
        new ApiResponse(200, createdBuyer, 'user registered successfully')
    )
} )


const loginBuyer = asyncHandler( async (req, res) => {

    const { fullName, password, mobileNumber } = req.body

    if(!(fullName || password || mobileNumber)) {
        throw new ApiError(400, 'All fields are required')
    }

    const buyer = await buyerModel.findOne({ $or: [{fullName}, {mobileNumber}]})

    if(!buyer) {
        throw new ApiError(404, 'user not found')
    }

    const passwordCorrect = await buyer.isPasswordCorrect(password)

    if(!passwordCorrect) {
        throw new ApiError(400, 'incorrect password')
    }

    const {accessToken, refreshToken} = await generateAccessAndRefreshToken(buyer._id)

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
                user: buyer, accessToken, refreshToken
            },
            'user logged in successfully'
        )
    )


} )


const logoutBuyer = asyncHandler( async (req, res) => {
    await buyerModel.findByIdAndUpdate(
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


module.exports = {registerBuyer, loginBuyer, logoutBuyer}