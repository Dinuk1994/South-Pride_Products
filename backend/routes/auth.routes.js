import express from "express"
import { signin ,login, logout} from "../controller/auth.controller.js";

const authRouter = express.Router();

authRouter.post("/signin",signin)
authRouter.post("/login",login)
authRouter.post("/logout",logout)

export default authRouter;