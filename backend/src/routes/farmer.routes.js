const Router = require('express');
const { registerFarmer, loginFarmer, logoutFarmer, refreshAccessToken, changeCurrentPassword, getCurrentUser, sendOtp } = require('../controllers/farmer.controller');
const router = Router();
const upload = require('../middlewares/multer.middleware');
const verifyJWT_farmer = require('../middlewares/auth_farmer.middleware');

// Route for registering a farmer with profile picture upload
router.route('/register').post(
    upload.single('profilePicture'), 
    registerFarmer
);

router.route('/login').post(
    loginFarmer
)

// secured routes
router.route('/logout').post(
    verifyJWT_farmer,
    logoutFarmer
)
router.route('/refresh-token').post(refreshAccessToken)
router.route('/change-password').post(changeCurrentPassword)
router.route('/get-user').get(getCurrentUser)
router.route('/send-otp/:mobileNumber').get(sendOtp)


module.exports = router;
