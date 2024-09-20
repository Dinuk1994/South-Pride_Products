import jwt from 'jsonwebtoken'

export const GenerateAccessToken = (userId)=>{
    return jwt.sign({id : userId},process.env.ACCESS_TOKEN_SECRET,{expiresIn:'7d'})
}