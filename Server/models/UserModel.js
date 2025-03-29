import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
   name: {type: String, required: true},
   email: {type:String ,required: true, unique: true },
   password: {type: String, required: true},
   creditBalance: {type: Number, default: 5}
})

const UserModel = mongoose.models.user || mongoose.model("User", UserSchema)

export default UserModel