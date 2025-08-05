import { pool } from "../db.js";
import bcrypt from "bcrypt";

export async function editPassword(req, res) {
    try {
        const { oldPassword, newPassword } = req.body;
        const user = req.user;
        const result = await pool.query("SELECT * FROM users WHERE id = $1", [user.id]);
        if(result.rows.length > 0){
            const match = await bcrypt.compare(oldPassword, result.rows[0].password);
            if(match){
                const hashedPassword = await bcrypt.hash(newPassword, 10);
                await pool.query("UPDATE users SET password = $1", [hashedPassword]);
                return res.send("Password Updated");
            }else{
                return res.send("Wrong Password");
            }
        }else{
            return res.send("User not found")
        }
    } catch (error) {
        console.error("error on editPassword", error);
        return res.send("something went wrong");
    }
}

export async function changeRole(req, res) {
    try {
        const { userId, role } = req.body;
        const result = await pool.query("UPDATE users SET role = $1 WHERE id = $2",[role, userId]);

        if(result.rowCount > 0){
            return res.send(`Role for user ${userId} has Changed`);
        }else{
            return res.send('User not found');
        }
    } catch (error) {
        console.error('error on changeRole:', error);
        return res.send("Something went wrong")
    }
}