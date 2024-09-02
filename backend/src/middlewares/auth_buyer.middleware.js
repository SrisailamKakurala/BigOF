const { ApiError } = require("../utils/ApiError");
const asyncHandler = require("../utils/asyncHandler");
const jwt = require('jsonwebtoken')
const buyerModel = require('../models/buyer.model')

const verifyJWT_buyer = asyncHandler( async (req, res, next) => {

    try {
        const token = req.cookies?.accessToken || req.header('Authorization')?.replace('Bearer ', '')
    
        if(!token) {
            throw new ApiError('401', 'unauthorized request');
        }
    
        const decodedToken = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
    
        const user = await buyerModel.findById(decodedToken?._id).select('-password -refreshToken')
    
        if(!user) {
            throw new ApiError('401', 'Invalid access token')
        }
    
        req.user = user
        next()
    } catch (error) {
        throw new ApiError(401, error?.message || 'Invalid access token')
    }

} )

module.exports = verifyJWT_buyer