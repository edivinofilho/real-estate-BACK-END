import { z } from "zod";
import { realEstateCreateSchemas, realEstateReadSchema, realEstateWithAddressCreateSchema } from "../schemas/realEstate.schema";
import { DeepPartial, Repository } from "typeorm";
import { RealEstate } from "../entities";

type RealEstateCreate = z.infer<typeof realEstateCreateSchemas>; //DeepPartial<RealEstate>

type RealEstateRead = z.infer<typeof realEstateReadSchema>;

type RealEstateWithAddress = z.infer<typeof realEstateWithAddressCreateSchema>;

type RealEstateRepo = Repository<RealEstate>;


export { RealEstateCreate, RealEstateRead, RealEstateWithAddress, RealEstateRepo }
