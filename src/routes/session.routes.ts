import { Router } from "express";
import { sessionController } from "../controllers";
import middleware from "../middleware";
import { sessionSchema } from "../schemas";

const sessionRouter = Router();

sessionRouter.post(
  "",
  middleware.validateBody(sessionSchema),
  sessionController.sessionCreate
);

export { sessionRouter };
