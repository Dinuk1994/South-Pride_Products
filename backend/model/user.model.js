import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    fullName : {
        type : String,
        required : true,
        trim : true
    },
    userName : {
        type : String,
        required : true,
        trim : true,
        unique : true
    }, 
    email : {
        type : String,
        required : true,
        unique : true,
        trim : true
    },
    password : {
        type : String,
        required :  true,
        unique : true
    },
    role : {
        type : Number,
        default : 0
    },
    cart : {
        type : Array,
        default : []
    }
},{timestamps : true})

const User = mongoose.model("User" , userSchema);
export default User;