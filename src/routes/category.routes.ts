import { Router } from "express";
import categoryController from "../controllers/category.controller";
import middleware from "../middleware";
import { categoriesCreateSchema } from "../schemas";

const categoriesRouter = Router();

categoriesRouter.post("", middleware.validateBody(categoriesCreateSchema), middleware.verifyToken, middleware.verifyIsAdmin, middleware.validateCategoryName, categoryController.categoryCreate);

categoriesRouter.get("", categoryController.readCategory);

categoriesRouter.get("/:id/realEstate", categoryController.readRealEstateCategory);

export { categoriesRouter };