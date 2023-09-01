import { Router } from "express";
import realEstateController from "../controllers/realEstate.controller";
import middleware from "../middleware";
import { realEstateCreateSchema } from "../schemas";

const realEstateRouter = Router();

realEstateRouter.post(
  "",
  middleware.verifyToken,
  middleware.validateAdmin,
  middleware.validateBody(realEstateCreateSchema),
  realEstateController.createRealEstate
);

realEstateRouter.get("", realEstateController.readRealEstate);

export { realEstateRouter };
