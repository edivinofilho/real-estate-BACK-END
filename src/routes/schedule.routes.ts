import { Router } from "express";
import middlewares from "../middleware";
import scheduleController from "../controllers/schedule.controller";

const scheduleRouter = Router();

scheduleRouter.post("/schedules", middlewares.validateBody, scheduleController.scheduleCreate)
scheduleRouter.get("/schedules/realEstate/:id")

export default  scheduleRouter;