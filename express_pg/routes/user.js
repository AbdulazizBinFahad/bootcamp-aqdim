import express from "express";
import { changeRole, editPassword} from "../controllers/user.js";
import { auth } from "../middlewares/auth.js";

const router = express.Router();

/*
* Edit user password
* role user
*/
router.put("/password", auth(), editPassword);

/*
* Edit user role
* role admin
*/
router.put("/role", auth("admin"), changeRole);

export default router;
