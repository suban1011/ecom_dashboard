import express from "express"
import { loginController, registerController } from "../controllers/registerController.js";

const router = express.Router();


router.post("/register", registerController)
router.post("/login", loginController)

// router.get("/currentUser", getCurrentUser);

export default router;