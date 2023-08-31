import { AppDataSource } from "./data-source";
import { Address, Category, RealEstate, Schedule, User } from "./entities";
import { AddressRepo, CategoryRepo, RealEstateRepo, ScheduleRepo, UserRepo } from "./interfaces";

const userRepo: UserRepo = AppDataSource.getRepository(User);

const scheduleRepo: ScheduleRepo = AppDataSource.getRepository(Schedule);

const categoryRepo: CategoryRepo = AppDataSource.getRepository(Category);

const realEstateRepo: RealEstateRepo = AppDataSource.getRepository(RealEstate);

const addressRepo: AddressRepo = AppDataSource.getRepository(Address)

export { userRepo, scheduleRepo, categoryRepo, realEstateRepo, addressRepo };