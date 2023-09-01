import "dotenv/config";
import { SessionCreate, SessionReturn } from "../interfaces";
import { sign } from "jsonwebtoken";
import { userRepo } from "../repositories";
import { User } from "../entities";
import { AppError } from "../errors";
import { compare } from "bcryptjs";

const sessionCreate = async (payload: SessionCreate): Promise<SessionReturn> => {

  const user: User | null = await userRepo.findOneBy({ email: payload.email})

  console.log(user)
  if(!user) throw new AppError("Invalid credentials", 401);

  const samePassword: boolean = await compare(payload.password, user.password);

  if(!samePassword) throw new AppError("Invalid credentials", 401);

  const token = sign({ admin: user.admin, id: user.id},
    process.env.SECRET_KEY!,
    { subject: user.id.toString(), expiresIn: process.env.EXPIRES_IN!} )

  return { token };
}; 

export default { sessionCreate };