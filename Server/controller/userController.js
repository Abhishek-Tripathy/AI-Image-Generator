import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import UserModel from '../models/UserModel.js'

export const registerUser = async (req, res) => {
   try {
      const {name, email, password} = req.body

      if(!name || !email || !password ) return res.json({success: false,message: "Missing Details"})

      const salt = await bcrypt.genSalt(10)
      const hashedPassword = await bcrypt.hash(password, salt)

      const userData = {
         name,
         email,
         password: hashedPassword
      }

      const newUser = new UserModel(userData)
      const user = await newUser.save()

      const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)

      res.json({success: true, token, user: {name: user.name}})
   } catch (error) {
      console.log(error)
      res.json({success: false, message: error.message})
   }
}

export const loginUser = async (req, res) => {
   try {
      const {email, password} = req.body
      const user = await UserModel.findOne({email})

      if(!user) return res.json({success: false, message: "User does not exists"})

      const isMatched = await bcrypt.compare(password, user.password)

      if(isMatched) {
         const token = jwt.sign({id: user._id}, process.env.JWT_SECRET)

         res.json({success: true, token, user: {name: user.name}})
      }else{
         res.json({success: true, message: "Invalid Credentials"})
      }
   } catch (error) {
      console.log(error)
      res.json({success: false, message: error.message})
   }
} 

export const userCredits = async (req, res) => {
   try {
      const {userId} = req.body

      const user = await UserModel.findById(userId)

      res.json({success: true, credits: user.creditBalance, user: {name:user.name}})
   } catch (error) {
      console.log(error)
      res.json({success: false, message: error.message})
   }
}

