import { User } from "../entities";
import { UserCreate, UserRead, UserReturn, UserUpdate } from "../interfaces";
import { userRepo } from "../repositories";
import { userReadSchema, userReturnSchema } from "../schemas";

const createUser = async (payload: UserCreate): Promise<UserReturn> => {

  const newUser: User | null = userRepo.create(payload);
  await userRepo.save(newUser);

  return userReturnSchema.parse(newUser);
}; 

const readUsers = async (): Promise<UserRead> => {
  return userReadSchema.parse(await userRepo.find({ withDeleted: true}));
};

const updateUser = async ({ admin, ...payload} : UserUpdate, userId: number): Promise<UserReturn> => { 
  const findUser: User | null = await userRepo.findOneBy({ id: userId });

  const updatedUser: UserUpdate = userRepo.create({
    ...findUser,
    ...payload,
  });


  console.log(updateUser);
  await userRepo.save(updatedUser);

  return userReturnSchema.parse(updatedUser);
};

const deleteUser = async (user: User): Promise<void> => {
  await userRepo.softRemove(user);
};

export default { createUser, readUsers, updateUser, deleteUser };