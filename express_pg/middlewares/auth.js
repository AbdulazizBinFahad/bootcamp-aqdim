import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

export const auth = (role = 'user') => (req, res, next) => {
    const token = req.headers.token;
    if(!token){
        return res.send("No Token");
    }
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        if(role == "admin"){
            if(req.user.role != role) return res.send("not Allowed")
        }
        next();
    } catch (error) {
        console.error('auth middleware error:', error)
        return res.status(401).send("invaild token");
    }
}