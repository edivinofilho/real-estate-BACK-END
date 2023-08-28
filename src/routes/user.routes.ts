import { Router } from "express";
import { userController } from "../controllers";

const userRouter = Router();

userRouter.post("", userController.userCreate);
userRouter.get("", userController.usersRead);
userRouter.patch("/:id", userController.userUpdate);
userRouter.delete("/:id", userController.userDelete);


export default  userRouter;