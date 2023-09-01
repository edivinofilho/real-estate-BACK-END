import { Router } from "express";
import middleware from "../middleware";
import scheduleController from "../controllers/schedule.controller";
import { scheduleCreateSchema } from "../schemas";
import verifyIsAdmin from "../middleware/verifyIsAdmin.middleware";

const scheduleRouter = Router();

scheduleRouter.post(
  "",
  middleware.verifyToken,
  middleware.validateBody(scheduleCreateSchema),
  middleware.checkUserSchedule,
  scheduleController.scheduleCreate
);

scheduleRouter.get("/realEstate/:id", middleware.verifyToken, middleware.verifyIsAdmin, scheduleController.realEstateSchedules);

export { scheduleRouter };