const Router = require('express');
const { registerBuyer, loginBuyer, logoutBuyer } = require('../controllers/buyer.controller');
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

module.exports = router;
