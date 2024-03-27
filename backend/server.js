import express from "express"
import dotenv from "dotenv"
import colors from "colors"
import cors from "cors"
import ConnectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js"
import productRoutes from "./routes/productRoutes.js"
const app = express();

dotenv.config()

app.use(cors());
app.use(express.json());
ConnectDB()

app.get("/home", (async (req, rsp) => {
    rsp.send("hello")
})
)
app.use("/api/v1/auth", authRoutes)
app.use("/api/v1/product", productRoutes)

app.listen(process.env.PORT, console.log(`Running on ${process.env.PORT}`.bgCyan.white))