import { Router } from "express";
import { userController } from "../controllers";
import middleware from "../middleware";
import { userCreateSchema } from "../schemas";

const userRouter = Router();

userRouter.post("", middleware.validateBody(userCreateSchema), middleware.emailExists, userController.userCreate);
userRouter.get("", middleware.verifyToken, middleware.validateAdmin, userController.usersRead);

userRouter.patch("/:id", middleware.verifyToken, middleware.validateId, middleware.validateAdmin, userController.userUpdate);
userRouter.delete("/:id", middleware.verifyToken, middleware.validateId, middleware.validateAdmin, userController.userDelete);


export default  userRouter;