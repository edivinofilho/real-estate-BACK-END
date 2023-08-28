import { z } from "zod";

const userSchema = z.object({
  id: z.number().positive(),
  name: z.string().length(45),
  email: z.string().length(45).email(),
  admin: z.boolean().default(false),
  password: z.string().max(120),
  createdAt: z.date(),
  updated: z.date(),
  deletedAt: z.date().nullish()
});

const userCreateSchema = userSchema.omit({ id: true});
const userUpdate = userCreateSchema.partial();


export { userCreateSchema, userUpdate }