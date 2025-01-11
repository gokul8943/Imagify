import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import ConnectDB from './config/dbConnection.js'

dotenv.config()

const PORT = process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(express.json())

await ConnectDB()

app.listen(PORT, () =>{
    console.log("Server is runnning on port" + PORT);
    
})