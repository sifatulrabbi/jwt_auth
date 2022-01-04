import "express";
import { IUserDoc } from "../users";

declare global {
  namespace Express {
    interface Request {
      user?: IUserDoc;
      isAuthenticated?: boolean;
    }
  }
}
