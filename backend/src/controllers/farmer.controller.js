const asyncHandler = require('../utils/asyncHandler')
const {ApiError} = require('../utils/ApiError')
const {ApiResponse} = require('../utils/ApiResponse')
const uploadOnCloudinary = require('../utils/cloudinary')
const farmerModel = require('../models/farmer.model')

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


module.exports = {registerFarmer}