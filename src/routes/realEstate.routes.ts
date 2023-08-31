import { Router } from "express";
import realEstateController from "../controllers/realEstate.controller";
import middleware from "../middleware";
import { realEstateCreateSchemas } from "../schemas";

const realEstateRouter = Router();

realEstateRouter.post("", middleware.validateBody(realEstateCreateSchemas), middleware.verifyToken, middleware.validateAdmin, realEstateController.createRealEstate);

realEstateRouter.get("");

export { realEstateRouter };