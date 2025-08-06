import { pool } from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
import crypto from "crypto"
import { sendMail } from "../utils/mail.js";
dotenv.config();

export async function register(req, res) {
    try {
        const { name, password, email } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const activation_code = crypto.randomBytes(20).toString('hex');
        const result = await pool.query("INSERT INTO users (name, email, password, activation_code) VALUES ($1, $2, $3, $4) returning *",[name, email, hashedPassword, activation_code]);
        await sendMail(activation_code, email);
        return res.status(200).send(result.rows[0])
    } catch (error) {
        console.error(`error on register`, error);
        return res.status(400).send("something went wrong");
    }
}

export async function login(req, res) {
    try {
        const { email, password } = req.body;
        const result = await pool.query("SELECT * FROM users WHERE email = $1",[email]);
        if(result.rows.length > 0){
            const user = result.rows[0];
            const match = await bcrypt.compare(password, user.password);
            if(match){
                if(!user.is_active){
                    return res.send("Account is not active, Check your email")
                }
                const token = jwt.sign({
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: user.role
                }, process.env.JWT_SECRET, { expiresIn: "7d" });

                return res.send({
                    user :{
                    id: user.id,
                    name: user.name,
                    email: user.email,
                    role: user.role
                },
                token: token})
            }else{
                return res.send("Wrong password");
            }
        }else{
            return res.send("User not found");
        }
    } catch (error) {
        console.error(`error on login`, error);
        return res.status(400).send("something went wrong");
    }
}

export async function verifyEmail(req, res) {
    try {
        const { code } = req.body;
        const result = await pool.query("UPDATE users SET is_active = TRUE WHERE activation_code = $1",[code])
        if(result.rowCount > 0){
            return res.send("Your account is active now")
        }else{
            return res.send("Wrong activation code");
        }
    } catch (error) {
        console.error("error on email verify", error);
        return res.send("something went wrong");
    }
}