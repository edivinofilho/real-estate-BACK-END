import { z } from "zod";

const loginSchema = z.object({
  email: z.string().length(45).email(),
  password: z.string().max(120)
});

export { loginSchema };