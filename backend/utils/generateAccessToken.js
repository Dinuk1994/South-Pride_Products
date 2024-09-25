import jwt from 'jsonwebtoken'

export const GenerateAccessToken = (userId  , role , email)=>{
    return jwt.sign({id : userId , role : role , email : email},process.env.ACCESS_TOKEN_SECRET,{expiresIn:'7d'})
}