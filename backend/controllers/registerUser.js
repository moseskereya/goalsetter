const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const asyncHandler = require('express-async-handler');
const User = require('../models/userModel')

//register a new user 
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(404)
        throw new Error('Please add in all fields')
    }
    //check if user exist
    const UserExist = await User.findOne({ email })
    if (UserExist) {
        res.status(404)
        throw new Error('User Already Exists')
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt)
    //create user

    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if (user) {
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateJwt(user._id)
        })
    } else {
        res.status(404)
        throw new Error('Inavlid User data')
    }
})

//login users
const loginUser = asyncHandler(async (req, res) => {
    const {email, password} = req.body
    //check if user is already exist
    const user = await User.findOne({ email })
    if (user && (await bcrypt.compare(password, user.password))) {
          res.json({
            _id: user.id,
            name: user.name,
              email: user.email,
            token: generateJwt(user._id)
        })
    } else {
       res.status(404)
        throw new Error('Inavlid User Credentials')
    }
})



//Gererate JWT

const generateJwt = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {expiresIn: '30d'})
}



//get user information
const getMe = asyncHandler(async (req, res) => {
    res.json({ msg: "Regiter user" });
})

module.exports = {
    registerUser,
    loginUser,
    getMe
}