import express from "express";
import {
  registerUser,
  loginUser,
  registernewuser,
  getProfile,
} from "./authController.js";
import { protect } from "./authMiddleware.js";

const router = express.Router();

router.post("/register", registernewuser);
router.post("/login", loginUser);
router.get("/profile", protect, getProfile);

export default router;
