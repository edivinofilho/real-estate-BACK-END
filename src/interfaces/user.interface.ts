import { z } from "zod";
import { userCreateSchema } from "../schemas";

type UserCreate = z.infer<typeof userCreateSchema>;

export { UserCreate };