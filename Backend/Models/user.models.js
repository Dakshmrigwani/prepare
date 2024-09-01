import mongoose, { Schema } from "mongoose";
import jwt from "jsonwebtoken";
import crypto from "crypto";
import bcrypt from "bcrypt";

const UserSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
      },
      password: {
        type: String,
        required: [true, "Password is required"],
      },
})

UserSchema.pre("save" , async function(next){
    if (!this.isModified("password")) return next();
    this.password = await bcrypt.hash(this.password , 10)
})

UserSchema.methods.isPasswordCorrect = async function (password) {
    return bcrypt.compare(password , this.password)
}

export default User = mongoose.model("user" , UserSchema)