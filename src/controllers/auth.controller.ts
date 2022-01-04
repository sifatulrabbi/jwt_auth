import { Request, Response } from "express";
import { authService } from "../services";

class AuthController {
  login(req: Request, res: Response) {
    res.status(200).json({
      message: "Login successful",
    });
  }

  logout(req: Request, res: Response) {
    res.status(200).json({
      message: "Logout successful",
    });
  }
}

export const authController = new AuthController();
