import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/auth.js"
import userRoute from "./routes/user.js"
dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use("/auth", authRoute)

app.use("/user", userRoute)

app.listen(port, () => console.log(`Server is running on ${port}`));