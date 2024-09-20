import jwt from 'jsonwebtoken'
export const generateRefreshToken =(user,res)=>{
    const refreshToken = jwt.sign({user},process.env.REFRESH_TOKEN_SECRET,{expiresIn : "1d"})
    res.cookie("jwt",refreshToken,{
        maxAge : 24 * 60 * 60 *1000,
        httpOnly : true, 
        sameSite : "strict", 
        secure : process.env.NODE_ENV !== "development"
    })
}


