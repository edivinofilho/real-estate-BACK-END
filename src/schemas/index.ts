import { addressCreateSchema, addressReadSchema } from "./address.schema";
import {
  categoriesSchema,
  categoryReadSchema,
  categoriesCreateSchema,
} from "./category.schema";
import {
  realEstateSchema,
  realEstateCreateSchemas,
  realEstateReadSchema,
  realEstateWithAddressCreateSchema,
} from "./realEstate.schema";
import { scheduleCreateSchema, scheduleSchema } from "./schedule.schema";
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
  realEstateCreateSchemas,
  realEstateReadSchema,
  realEstateWithAddressCreateSchema,
  addressCreateSchema, 
  addressReadSchema
};