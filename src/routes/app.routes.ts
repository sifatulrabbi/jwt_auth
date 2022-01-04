import { Router } from "express";
import { appController } from "../controllers";

const appRoutes = Router();

appRoutes.get("/", appController.getHello);

export { appRoutes };
