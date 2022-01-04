import { Router } from "express";
import { authController } from "../controllers";

const authRoutes = Router();

authRoutes.post("/login", authController.login);
authRoutes.post("/logout", authController.logout);

export { authRoutes };
