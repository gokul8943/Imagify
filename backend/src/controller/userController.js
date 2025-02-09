import userModel from "../models/userModel.js";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

export const register = async (req, res) => {
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            return res.status(404).json({ sucess: false, message: "Missing Details" })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new userModel({ name, email, password: hashedPassword });
        console.log('new',newUser);
        
        const user = await newUser.save();

        const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
        res.status(200).json({ sucess: true, token, user: { name: user.name } })
    } catch (error) {
        console.log(error);
        res.status(500).json({ sucess: false, message: error.message })
    }
}

export const loginUser = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await userModel.findOne({ email })
        if (!user) {
            return res.status(400).json({ success: true, message: "User does not exits" })
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if (isMatch) {
            const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET)
            res.status(200).json({ sucess: true, token, user: { name: user.name } })
        } else {
            return res.status(400).json({ success: false, message: "Invalid Credentials" })
        }
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error.message })
    }
}

export const userCredits = async(req,res) =>{
    try {
        const {userId} = req.body

        const user = await userModel.findById(userId)
        res.status(200).json({success:true,credits:user.creditBalance, user:{name:user.name}})
    } catch (error) {
        console.log((error))
        res.json({success:false,message:error.message})
    }
}