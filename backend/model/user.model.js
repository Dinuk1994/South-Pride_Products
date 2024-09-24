import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
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
        type : String,
        default : "user"
    },
    
},{timestamps : true})

const User = mongoose.model("User" , userSchema);
export default User;