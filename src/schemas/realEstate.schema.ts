import { z } from "zod";
import { scheduleCreateSchema, categoriesCreateSchema, addressCreateSchema } from ".";

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

const realEstateWithAddressCreateSchema = z.object({
  value: z.number().default(0),
  size: z.number().positive(),
  address: addressCreateSchema,
  categoryId: z.number().positive() 
})

const realEstateReadSchema = z.array(realEstateSchema);

export { realEstateSchema,  realEstateCreateSchemas, realEstateReadSchema, realEstateWithAddressCreateSchema };