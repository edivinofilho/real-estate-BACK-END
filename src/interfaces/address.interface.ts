import { z } from "zod";
import { addressCreateSchema, addressReadSchema } from "../schemas";
import { Repository } from "typeorm";
import { Address } from "../entities";

type AddressCreate = z.infer<typeof addressCreateSchema>;

type AddressRead = z.infer<typeof addressReadSchema>;

type AddressRepo = Repository<Address>;

export { AddressCreate, AddressRead, AddressRepo };
