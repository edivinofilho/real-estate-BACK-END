import { z } from "zod";
import { categoriesCreateSchema, categoryReadSchema } from "../schemas";
import { Repository } from "typeorm";
import { Category } from "../entities";

type CategoryCreate = z.infer<typeof categoriesCreateSchema>;

type CategoryRead = z.infer<typeof categoryReadSchema>;

type CategoryRepo = Repository<Category>;

export { CategoryCreate, CategoryRead, CategoryRepo };