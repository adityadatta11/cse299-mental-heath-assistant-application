import express from "express";
import { login } from "../controllers/auth.js";

const router = express.Router();

router.post("/login", login); // This is from auth/login not just /login

export default router;