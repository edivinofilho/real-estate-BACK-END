import { Request, Response } from "express";
import { userServices } from "../services";
import { UserRead, UserReturn } from "../interfaces";
import { userRepo } from "../repositories";
import { User } from "../entities";

const userCreate = async (req: Request, res: Response): Promise<Response> => {
  const user: UserReturn = await userServices.createUser(req.body);

  return res.status(201).json(user);
};

const usersRead = async (req: Request, res: Response): Promise<Response> => {
  const users: UserRead = await userServices.readUsers();

  console.log(users)

  return res.status(200).json(users);
};

const userUpdate = async (req: Request, res: Response): Promise<Response> => {
  const userId = Number(req.params.id);
  const body = req.body;

  const user: UserReturn | null = await userRepo.findOneBy({id: userId})

  const updatedUser: UserReturn = await userServices.updateUser(req.body, userId);

  return res.status(200).json(updatedUser);
};

const userDelete = async (req: Request, res: Response): Promise<Response> => {
  await userServices.deleteUser(res.locals.foundUser)

  return res.status(204).json();
};

export default { userCreate, usersRead, userUpdate, userDelete };