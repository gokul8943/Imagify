import express from 'express'
import {register,loginUser} from '../controller/userController.js'

const userRouter = express.Router()

userRouter.post('/register',register)
userRouter.post('/login',loginUser)

export default userRouter