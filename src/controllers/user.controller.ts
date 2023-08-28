import { NextFunction, Request, Response } from "express";
import userServices from "../services";
import { User } from "../entities";
import { UserRead, UserUpdate } from "../interfaces";
import { userRepo } from "../repositories";

const userCreate = async (req: Request, res: Response): Promise<Response> => {
  const user: User = await userServices.createUser(req.body);

  return res.status(201).json(user);
};

const usersRead = async (req: Request, res: Response): Promise<Response> => {
  const users: UserRead = await userServices.readUsers();

  // console.log(users)
  return res.status(200).json(users);
};

const userUpdate = async (req: Request, res: Response): Promise<Response> => {
  const userId = Number(req.params.id);
  const body = req.body;

  const user = await userRepo.findOneBy({id: userId})

  const updatedUser = {...user, ...body}

  const newUser: UserUpdate = await userServices.updateUser(updatedUser);

  console.log(updatedUser)
  return res.status(201).json(newUser);
};

const userDelete = async (req: Request, res: Response): Promise<Response> => {

  const userId = Number(req.params.id)
  const user = await userRepo.findOneBy({id: userId})

  // console.log(user)
  await userServices.deleteUser(user)

  return res.status(204).json();
};

export default { userCreate, usersRead, userUpdate, userDelete };