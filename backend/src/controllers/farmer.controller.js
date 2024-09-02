const asyncHandler = require('../utils/asyncHandler')


const registerFarmer = asyncHandler( async (req, res) => {
    res.status(200).json({
        message: 'ok'
    })
} )


module.exports = {registerFarmer}