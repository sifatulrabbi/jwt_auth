import { Request, Response } from "express";

export class AppController {
  getHello(req: Request, res: Response) {
    res.status(200).json({ message: "Hello world" });
  }
}

export const appController = new AppController();
