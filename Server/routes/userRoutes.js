const express   = require('express');
const { loginUser, signupUser } = require('../controller/userController');
const router = express.Router();


//Login router

router.post('/login',loginUser)


//Signup User router

router.post('/signup',signupUser)

module.exports = router;