import express from 'express'
import { generateImage } from '../controller/imageController'
import userAuth from '../middlewares/auth'

const imageRouter = express.Router()

imageRouter.post('/generate-image',userAuth , generateImage)

export default imageRouter