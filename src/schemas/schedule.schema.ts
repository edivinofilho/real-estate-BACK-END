import { z } from "zod";
import { realEstateSchema, userReturnSchema } from "./index";

const scheduleSchema = z.object({
  id: z.number().positive(),
  date: z.string(),
  hour: z.string(),
  realEstate: realEstateSchema,
  user: userReturnSchema,
});

const scheduleCreateSchema = z.object({
  date: z.string(),
  hour: z.string(),
  realEstateId: z.number().positive(),
});

const schedulesSchema = z.array(scheduleSchema);

export { scheduleSchema, scheduleCreateSchema, schedulesSchema };
