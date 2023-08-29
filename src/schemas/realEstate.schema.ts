import { z } from "zod";
import { scheduleCreateSchema, categoriesCreateSchema } from ".";

const realEstateSchema = z.object ({
  id: z.number().positive(),
  sold: z.boolean().default(false),
  value: z.number().default(0),
  size: z.number(),
  createdAt: z.string(),
  updatedAt: z.string(),
  addressId: z.string(),
  schedule: scheduleCreateSchema,
  categories: categoriesCreateSchema
});

const realEstateCreateSchemas = realEstateSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  addressId: true,
  schedule: true,
  categories: true
});

export {realEstateSchema,  realEstateCreateSchemas};