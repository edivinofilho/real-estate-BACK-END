import { User } from "../entities";
import { UserCreate, UserRead } from "../interfaces";
import { userRepo } from "../repositories";

const createUser = async (payload: UserCreate): Promise<User> => {
  // payload.password = hashSync(payload.password, 10);
  const newUser: User = userRepo.create(payload);
  await userRepo.save(newUser);

  return newUser;
}; 

const readUsers = async (): Promise<UserRead> => {
  return await userRepo.find()
};

const updateUser = async (user: any): Promise<User> => {
  return await userRepo.save(user);
};

const deleteUser = async (user: any): Promise<void> => {

  await userRepo.remove(user);
};

export default { createUser, readUsers, updateUser, deleteUser };

function hashSync(password: string | undefined, arg1: number): string {
  throw new Error("Function not implemented.");
}
