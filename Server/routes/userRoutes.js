import express from 'express'
import { loginUser, registerUser, userCredits } from '../controller/userController.js'
import userAuth from '../middleware/auth.js'

const userRouter = express.Router()

userRouter.post("/register", registerUser)
userRouter.post("/login", loginUser)
userRouter.get("/credits", userAuth, userCredits)

export default userRouter