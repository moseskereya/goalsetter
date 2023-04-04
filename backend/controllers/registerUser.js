const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel')

//register a new user 
const registerUser = asyncHandler(async (resq, res) => {
    res.json({ msg: "Regiter user" });
})

//login users
const loginUser = asyncHandler(async (resq, res) => {
    res.json({ msg: "User logged in" });
})

//get user information
const getMe = asyncHandler(async (resq, res) => {
    res.json({ msg: "Regiter user" });
})

module.exports = {
    registerUser,
    loginUser,
    getMe
}