import mongoose, { Schema } from "mongoose";
import bcrypt from "bcrypt";
import validator from "validator";

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
})

userSchema.statics.signup = async function(email, password) {

    if(!email || !password){
        throw Error("all fields need to be filled");
    }

    if(!validator.isEmail(email)){
        throw Error("Email is not valid");
    }

    if(!validator.isStrongPassword(password)){
        throw Error("Password is not valid");
    }

    const exists = await this.findOne({ email })

    if(exists) {
        throw Error('Email already in use');
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({ email, password: hash })

    return user;
    

};

const User = mongoose.model('User', userSchema);
export default User;