import express from "express"
import User from "../model/user.model.js";
import bcrypt from "bcryptjs"
import { GenerateAccessToken } from "../utils/generateAccessToken.js";
import { generateRefreshToken } from "../utils/generateRefreshToken.js";

export const signin = async (req, res) => {
    try {
        const { userName, email, password } = req.body;
        const user = await User.findOne({ email })
        if (user) return res.status(400).json({ error: "User is already exists" })
        if (password.length < 6) return res.status(400).json({ error: "Password must be at least 6 characters" })

        const hashPassword = await bcrypt.hash(password, 10)

        const newUser = new User({
            userName,
            email,
            password: hashPassword
        })
        if (newUser) {
            const accessToken = GenerateAccessToken(newUser._id)
            generateRefreshToken(newUser._id,res)
            await newUser.save()
            return res.status(200).json({ msg: "User Register success", accessToken })
        } else {
            return res.status(400).json({ error: "Invalid User Data" })
        }

    } catch (error) {
        console.log(error);
        
        res.status(500).json({ error: " Internal Server Error" })
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body

        const user = await User.findOne({ email })
        if (!user) return res.status(400).json({ msg: "User is not registerd" })

        const checkPassword = await bcrypt.compare(password, user.password)
        if (!checkPassword) return res.status(400).json({ msg: "Invalid Password" })

        const accessToken = GenerateAccessToken(user._id)
        generateRefreshToken(user._id,res)

        res.cookie('accessToken',accessToken,{httpOnly : true,secure : false}).json({
            user,
            msg : "Login Success",   
        })
    
    } catch (error) {
        return res.status(500).json({ msg: "Internal Server Error" })
    }

}
export const logout = async (req, res) => {
    try {
        res.cookie("jwt", "", { maxAge: 0 })
        res.status(200).json({ msg: "Log Out Success" })
    } catch (error) {
        res.status(500).json({ error: "Internal Server Error" })
    }
}