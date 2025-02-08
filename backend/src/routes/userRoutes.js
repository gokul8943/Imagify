import express from 'express'
import { register,loginUser, userCredits } from '../controller/userController.js'
import userAuth from '../middlewares/auth.js'
const userRouter = express.Router()

userRouter.post('/register',register)
userRouter.post('/login',loginUser)
userRouter.get('/credits',userAuth,userCredits)


export default userRouter