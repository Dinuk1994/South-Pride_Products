import express from "express"
import { signin ,login, logout} from "../controller/auth.controller.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const authRouter = express.Router();

authRouter.post("/signin",signin)
authRouter.post("/login",login)
authRouter.post("/logout",logout)
authRouter.get("/check-auth",authMiddleware,(req,res)=>{
    const user = req.user;
    res.status(200).json({ msg: "Authenticated", user });

})

export default authRouter;