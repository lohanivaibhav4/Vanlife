const express = require("express")
const mongoose = require("mongoose")
const userRouter = express.Router()
const { User } = require("../Models/User") 


//! LOGIN USER
userRouter.post('/', async(req, res)=>{
    const { email, password } = req.body.loginFormData
    const loginData = await User.findOne({
        email,password
    })
    if(!loginData){
        res.status(404).json({message:"Either email or password is incorrect"})
    }
    res.send(loginData)
})

//! REGISTER USER

module.exports = userRouter