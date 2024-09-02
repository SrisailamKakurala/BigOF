const Router = require('express');
const { registerBuyer, loginBuyer } = require('../controllers/buyer.controller');
const router = Router();
const upload = require('../middlewares/multer.middleware');

// Route for registering a farmer with profile picture upload
router.route('/register').post(
    upload.single('profilePicture'), 
    registerBuyer
);

// Route for logging in a farmer
// router.route('/login').post(loginFarmer);

module.exports = router;
