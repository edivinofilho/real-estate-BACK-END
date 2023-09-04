import { z } from "zod";
import {
  addressCreateSchema,
  addressSchema,
  categoriesSchema,
} from "./index";

const realEstateSchema = z.object({
  id: z.number().positive(),
  sold: z.boolean().default(false),
  value: z.string().or(z.number().positive()).default(0),
  size: z.number().int().positive(),
  createdAt: z.string(),
  updatedAt: z.string(),
  address: addressSchema,
  category: categoriesSchema,
});

const realEstateCreateSchema = z.object({
  value: z.string().or(z.number().positive()).default(0),
  size: z.number().positive(),
  address: addressCreateSchema,
  categoryId: z.number().positive(),
});

const realEstateReadSchema = z.array(realEstateSchema);

export { realEstateSchema, realEstateCreateSchema, realEstateReadSchema };
