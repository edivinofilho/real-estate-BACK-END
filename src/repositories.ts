import { AppDataSource } from "./data-source";
import { Category, Schedule, User } from "./entities";
import { CategoryRepo, ScheduleRepo, UserRepo } from "./interfaces";

const userRepo: UserRepo = AppDataSource.getRepository(User);

const scheduleRepo: ScheduleRepo = AppDataSource.getRepository(Schedule);

const categoryRepo: CategoryRepo = AppDataSource.getRepository(Category);

export { userRepo, scheduleRepo, categoryRepo };