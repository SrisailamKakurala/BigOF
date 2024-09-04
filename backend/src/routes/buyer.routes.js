const Router = require('express');
const { registerBuyer, loginBuyer, logoutBuyer, refreshAccessToken, changeCurrentPassword, getCurrentUser } = require('../controllers/buyer.controller');
const { sendOtp } = require('../controllers/farmer.controller');
const router = Router();
const upload = require('../middlewares/multer.middleware');
const verifyJWT_buyer = require('../middlewares/auth_buyer.middleware');

// Route for registering a farmer with profile picture upload
router.route('/register').post(
    upload.single('profilePicture'), 
    registerBuyer
);

router.route('/login').post(
    loginBuyer
)

// secured routes
router.route('/logout').post(
    verifyJWT_buyer,
    logoutBuyer
)
router.route('/refresh-token').post(refreshAccessToken)
router.route('/change-password').post(changeCurrentPassword)
router.route('/get-user').get(getCurrentUser)
router.route('/send-otp').get(sendOtp)



module.exports = router;
