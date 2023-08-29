import { z } from "zod";
import { realEstateSchema } from "../schemas/realEstate.schema";

type RealStateCreate = z.infer<typeof realEstateSchema>;


// type UserCreate = z.infer<typeof userCreateSchema>;
// type UserRead = z.infer<typeof userReadSchema>;
// type UserReturn = z.infer<typeof userReturnSchema>;

// type UserUpdate = DeepPartial<User>;

// type UserRepo = Repository<User>;
