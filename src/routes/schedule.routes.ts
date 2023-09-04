import { Router } from "express";
import middleware from "../middleware";
import scheduleController from "../controllers/schedule.controller";
import { scheduleCreateSchema } from "../schemas";

const scheduleRouter = Router();

scheduleRouter.post(
  "",
  middleware.verifyToken,
  middleware.validateBody(scheduleCreateSchema),
  scheduleController.scheduleCreate
);

scheduleRouter.get(
  "/realEstate/:id",
  middleware.verifyToken,
  middleware.verifyIsAdmin,
  scheduleController.realEstateSchedulesController
);

export { scheduleRouter };
