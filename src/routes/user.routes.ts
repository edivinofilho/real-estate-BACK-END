import { Router } from "express";
import { userController } from "../controllers";
import middlewares from "../middleware";

const userRouter = Router();

userRouter.post("", userController.userCreate);
userRouter.get("", middlewares.verifyToken, middlewares.validateAdmin, userController.usersRead);

userRouter.patch("/:id", userController.userUpdate);
userRouter.delete("/:id", middlewares.validateId, userController.userDelete);


export default  userRouter;