const express = require('express');
const { authUser, registerUser, getUserProfile, resetPassword, newpassword } = require('../controllers/userController');
const { protect } = require('../middleware');
const router = express.Router();

router.post('/login',authUser)
router.post('/register', registerUser)
router.post('/reset', resetPassword)
router.post('/newpassword',newpassword)
router.route('/profile').get(protect, getUserProfile)
module.exports = { router }