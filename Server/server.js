import express from 'express'
import cors from 'cors'
import "dotenv/config"
import { connectDB } from './config/db.js'
import userRouter from './routes/userRoutes.js'
import imageRouter from './routes/imageRoutes.js'

const PORT = process.env.PORT || 8000
const app = express()

app.use(express.json())
app.use(cors())

await connectDB()

app.use("/api/user", userRouter)
app.use("/api/image", imageRouter)

app.get("/", (req, res) => {
   res.send("API Working!")
})

app.listen(PORT, () => {
   console.log("Seerver is running on ==>" , PORT)
})
