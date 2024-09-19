import express from "express"
import dotenv from "dotenv"
import ConnectToDB from "./db/ConnectToDb.js";
import cors from "cors"
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.routes.js";

const app = express();
dotenv.config()

app.use(cors({
    origin: ["http://localhost:5173"],
    credentials: true
}))

const PORT = process.env.PORT || 5000

app.use(express.json());
app.use(cookieParser());

const router = express.Router()

app.use("/api/auth",authRouter)

app.listen(PORT, () => {
    ConnectToDB();
    console.log(`server is running on port ${PORT}`)
}
);
