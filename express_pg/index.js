import express from "express";
import dotenv from "dotenv";
import { login, register } from "./routes/auth.js";
import { auth } from "./middlewares/auth.js";
import { editPassword, changeRole } from "./routes/user.js";

dotenv.config();
const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.post("/register", register);

app.get("/login", login);

app.put("/password", auth(), editPassword);

app.put("/role", auth("admin"), changeRole);

app.listen(port, () => console.log(`Server is running on ${port}`));