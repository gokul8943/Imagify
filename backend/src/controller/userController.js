import userModel from "../models/userModel";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const register = async (req, res) => {
    try {
        const { name, email, password } = req.body

        if (!name || !email || !password) {
            return res.status(404).json({ sucess: false, message: "Missing Details" })
        }

        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const userData = {
            name,
            email,
            password: hashedPassword
        }
        const newUser = new userModel(userData)
        const user = await newUser.save()

        const token = jwt.sign({ id: user_id }, process.env.JWT_SECRET)
        res.status(200).json({ sucess: true, token, user: { name: user.name } })
    } catch (error) {
        console.log(error);
        res.status(500).json({sucess:false,message:error.message})
    }
}


 