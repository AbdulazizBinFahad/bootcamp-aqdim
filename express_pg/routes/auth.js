import express from "express";
import { login, register, verifyEmail } from "../controllers/auth.js";

const router = express.Router();

router.post("/register", register);

router.get("/login", login);

router.put("/verifyemail", verifyEmail);

export default router;
