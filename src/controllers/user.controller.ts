import { Request, Response } from "express";
import userServices from "../services";
import { UserRead, UserReturn, UserUpdate } from "../interfaces";
import { userRepo } from "../repositories";

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

  const user = await userRepo.findOneBy({id: userId})

  const updatedUser = {...user, ...body}

  const newUser: UserReturn = await userServices.updateUser(updatedUser);

  return res.status(200).json(newUser);
};

const userDelete = async (req: Request, res: Response): Promise<Response> => {
  await userServices.deleteUser(res.locals.foundUser)

  return res.status(204).json();
};

export default { userCreate, usersRead, userUpdate, userDelete };