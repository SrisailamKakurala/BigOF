const Router = require('express')
const { registerFarmer } = require('../controllers/farmer.controller')
const router = Router()


router.route('/register').post(registerFarmer)
router.route('/login').post(registerFarmer)

module.exports = router