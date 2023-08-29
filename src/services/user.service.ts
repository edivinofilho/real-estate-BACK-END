import { User } from "../entities";
import { UserCreate, UserRead, UserReturn, UserUpdate } from "../interfaces";
import { userRepo } from "../repositories";
import { userReadSchema, userReturnSchema } from "../schemas";

const createUser = async (payload: UserCreate): Promise<UserReturn> => {

  const newUser: User = userRepo.create(payload);
  await userRepo.save(newUser);

  return userReturnSchema.parse(newUser);
}; 

const readUsers = async (): Promise<UserRead> => {
  return userReadSchema.parse(await userRepo.find({ withDeleted: true}));
};

const updateUser = async (user: User): Promise<UserReturn> => { 
  const updatedUser: User = await userRepo.save(user);

  return userReturnSchema.parse(updatedUser)
};

const deleteUser = async (user: User): Promise<void> => {
  await userRepo.softRemove(user);
};

export default { createUser, readUsers, updateUser, deleteUser };