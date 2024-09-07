const asyncHandler = require('../utils/asyncHandler')
const { ApiError } = require('../utils/ApiError')
const { ApiResponse } = require('../utils/ApiResponse')
const uploadOnCloudinary = require('../utils/cloudinary')
const farmerModel = require('../models/farmer.model')
const jwt = require('jsonwebtoken')

const generateAccessAndRefreshToken = async (userId) => {
    try {
        const farmer = await farmerModel.findById(userId)
        const accessToken = farmer.generateAccessToken()
        const refreshToken = farmer.generateRefreshToken()

        // console.log(accessToken, refreshToken)

        farmer.refreshToken = refreshToken
        await farmer.save({ validateBeforeSave: false })

        return {
            accessToken,
            refreshToken
        }

    } catch (err) {
        throw new ApiError(500, 'something went wrong while generating access and refresh token')
    }
}


const registerFarmer = asyncHandler(async (req, res) => {

    const { fullName, mobileNumber, password, address, aadharNumber } = req.body
    // console.log(fullName, mobileNumber, password, address, aadharNumber);

    if ([fullName, mobileNumber, password, address, aadharNumber].some((field) => field?.trim() === '')) {
        throw new ApiError(400, 'All Fields are required')
    }

    const existedFarmer = await farmerModel.findOne({ aadharNumber: aadharNumber })

    if (existedFarmer) {
        throw new ApiError(409, 'User already exists')
    }


    const Farmer = await farmerModel.create({
        fullName,
        mobileNumber,
        password,
        address,
        aadharNumber,
    })

    const createdFarmer = await farmerModel.findById(Farmer._id).select(
        '-password -refreshToken',
    )

    if (!createdFarmer) {
        throw new ApiError(500, 'Error registering the user')
    }


    return res.status(200).json(
        new ApiResponse(200, createdFarmer, 'user registered successfully')
    )
})


const loginFarmer = asyncHandler(async (req, res) => {

    
    const { fullName, password, mobileNumber } = req.body
    console.log({ fullName, password, mobileNumber })

    if (!(fullName || password || mobileNumber)) {
        throw new ApiError(400, 'All fields are required')
    }

    const farmer = await farmerModel.findOne({ $or: [{ fullName }, { mobileNumber }] })

    if (!farmer) {
        throw new ApiError(404, 'user not found')
    }

    const passwordCorrect = await farmer.isPasswordCorrect(password)

    if (!passwordCorrect) {
        throw new ApiError(400, 'incorrect password')
    }

    // console.log(farmer._id)

    const { accessToken, refreshToken } = await generateAccessAndRefreshToken(farmer._id)

    // console.log({ accessToken, refreshToken })

    return res
        .status(200)
        .json(
            new ApiResponse(
                200,
                {
                    user: farmer, accessToken, refreshToken
                },
                'user logged in successfully'
            )
        )


})


const logoutFarmer = asyncHandler(async (req, res) => {
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
})


const refreshAccessToken = asyncHandler(async (req, res) => {
    const incomingRefreshToken = req.cookies.refreshToken || req.body.refreshToken

    if (!incomingRefreshToken) {
        throw new ApiError(400, 'unauthorized request')
    }

    try {
        const decodedToken = jwt.verify(
            incomingRefreshToken,
            process.env.REFRESH_TOKEN_SECRET
        )

        const user = await farmerModel.findById(decodedToken?._id)

        if (!user) {
            throw new ApiError(401, 'Invalid refresh token')
        }


        if (incomingRefreshToken !== user?.refreshToken) {
            throw new ApiError(401, 'Refresh token is expired or used')
        }

        const { accessToken, newRefreshToken } = await generateAccessAndRefreshToken(user._id)

        return res
            .status(200)
            .json(
                new ApiResponse(
                    200,
                    { accessToken, refreshToken: newRefreshToken },
                    'Access Token refreshed'
                )
            )
    } catch (error) {
        throw new ApiError(401, error?.message || 'Invalid refresh token')
    }


})


const changeCurrentPassword = asyncHandler(async (req, res) => {
    const { oldPassword, newPassword } = req.body

    const user = await farmerModel.findById(req.user?._id)
    const isPasswordCorrect = await user.isPasswordCorrect(oldPassword)

    if (!isPasswordCorrect) {
        throw new ApiError(401, 'Invalid old password')
    }

    user.password = newPassword

    await user.save({ validateBeforeSave: false })

    return res.status(200).json(new ApiResponse(200, {}, 'Password updated successfully'))


})


const getCurrentUser = asyncHandler(async (req, res) => {
    return res
        .status(200)
        .json(new ApiResponse(200, req.user, 'Current user fetched successfully'))
})


const sendOtp = asyncHandler(async (req, res) => {
    const mobileNumber = req.params.mobileNumber;

    const accountSid = process.env.TWILIO_ACCOUNT_SID;
    const authToken = process.env.TWILIO_AUTH_TOKEN;
    const client = require('twilio')(accountSid, authToken);

    // Generate a random OTP (6-digit number)
    const otp = Math.floor(Math.random() * 10000).toString();

    // Store OTP in session
    req.session.otp = otp;

    // Sending SMS to the specified number
    try {
        const message = await client.messages.create({
            body: `Your OTP is: ${otp}`, // Include the OTP in the message body
            from: '+15403182347', // Use the correct Messaging Service SID
            to: `+91${mobileNumber}`, // The recipient's phone number
        });

        res.status(200).json({ success: true, message: 'OTP sent successfully!' });
    } catch (error) {
        console.error('Error sending message:', error);
        res.status(500).json({ success: false, message: 'Failed to send OTP.' });
    }
});



module.exports = {
    registerFarmer,
    loginFarmer,
    logoutFarmer,
    refreshAccessToken,
    changeCurrentPassword,
    getCurrentUser,
    sendOtp
}