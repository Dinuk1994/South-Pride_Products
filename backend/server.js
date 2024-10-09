import express from "express"
import dotenv from "dotenv"
import ConnectToDB from "./db/ConnectToDb.js";
import cors from "cors"
import cookieParser from "cookie-parser";
import authRouter from "./routes/auth.routes.js";
import productRouter from "./routes/product.routes.js";
import cartRouter from "./routes/cart.routes.js";

const app = express();
dotenv.config()

const PORT = process.env.PORT || 5000

app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    allowedHeaders: [
        "Content-Type",
        "Authorization",
        "Cache-control",
        "Expires",
        "Prigma"
    ],
    credentials: true
}))


app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRouter)
app.use("/api/admin",productRouter)
app.use("/api/cart", cartRouter)

app.listen(PORT, () => {
    ConnectToDB();
    console.log(`server is running on port ${PORT}`)
}
);
