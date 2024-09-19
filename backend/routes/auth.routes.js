import express from "express"


const authRouter = express.Router();

authRouter.get("/signin",(req,res)=>{
    res.send("Checking sign in");
});

export default authRouter;