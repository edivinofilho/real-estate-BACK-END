import { Router } from "express";
import { sessinController } from "../controllers";
import middleware from "../middleware";

const sessionRouter = Router();

sessionRouter.post("/",  sessinController.sessionCreate)


export { sessionRouter };