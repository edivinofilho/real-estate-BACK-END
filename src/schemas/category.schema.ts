import { z } from "zod";

const categoriesSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(45),
});

const categoriesCreateSchema = categoriesSchema.omit({ id: true });

const categoryReadSchema = z.array(categoriesSchema);

export { categoriesSchema, categoriesCreateSchema, categoryReadSchema };
