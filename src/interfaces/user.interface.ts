import { z } from "zod";
import { loginSchema, userCreateSchema } from "../schemas";
import { User } from "../entities";
import { DeepPartial, Repository } from "typeorm";

type UserCreate = DeepPartial<User>; //z.infer<typeof userCreateSchema>;
type UserRead = Array<User>;
type UserUpdate = DeepPartial<User>;
type UserRepo = Repository<User>;
type UserLogin = z.infer<typeof loginSchema>;

export { UserCreate, UserRead, UserUpdate, UserRepo, UserLogin };