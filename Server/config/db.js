import mongoose from "mongoose";

export const connectDB = async () => {
   mongoose.connection.on("connected", () => {
      console.log("DB Connected")
   })

   await mongoose.connect(`${process.env.MONGODB_URI}/AI_Image_Generator`)
}