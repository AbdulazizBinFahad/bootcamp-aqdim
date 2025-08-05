import { pool } from "../db.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export async function register(req, res) {
    try {
        const { name, password, email } = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await pool.query("INSERT INTO users (name, email, password) VALUES ($1, $2, $3) returning *",[name, email, hashedPassword]);
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
                const token = await jwt.sign({
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

