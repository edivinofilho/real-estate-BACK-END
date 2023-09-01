import { addressSchema, addressCreateSchema, addressReadSchema } from "./address.schema";
import {
  categoriesSchema,
  categoryReadSchema,
  categoriesCreateSchema,
} from "./category.schema";
import {
  realEstateSchema,
  realEstateCreateSchema,
  realEstateReadSchema,
} from "./realEstate.schema";
import { scheduleCreateSchema, scheduleSchema, schedulesSchema } from "./schedule.schema";
import { sessionSchema } from "./session.schema";
import {
  userCreateSchema,
  userReadSchema,
  userReturnSchema,
  userSchema,
  userUpdateSchema,
} from "./user.schema";

export {
  userSchema,
  userCreateSchema,
  userUpdateSchema,
  userReturnSchema,
  userReadSchema,
  scheduleSchema,
  scheduleCreateSchema,
  categoriesSchema,
  categoriesCreateSchema,
  categoryReadSchema,
  sessionSchema,
  realEstateSchema,
  realEstateCreateSchema,
  realEstateReadSchema,
  addressSchema,
  addressCreateSchema, 
  addressReadSchema,
  schedulesSchema
};