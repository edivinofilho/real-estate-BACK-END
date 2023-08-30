import { z } from "zod";
import { userReadSchema, userReturnSchema } from "../schemas";
import { User } from "../entities";
import { DeepPartial, Repository } from "typeorm";

type UserCreate = DeepPartial<User> //z.infer<typeof userCreateSchema>;
type UserRead = z.infer<typeof userReadSchema>;
type UserReturn = z.infer<typeof userReturnSchema>;
type Token = { token: string }

type UserUpdate = DeepPartial<User>;

type UserRepo = Repository<User>;


export { UserCreate, UserRead, UserUpdate, UserRepo, UserReturn, Token };