import { AppDataSource } from "./data-source";
import { Schedule, User } from "./entities";
import { ScheduleRepo, UserRepo } from "./interfaces";

const userRepo: UserRepo = AppDataSource.getRepository(User);
const scheduleRepo: ScheduleRepo = AppDataSource.getRepository(Schedule);

export { userRepo,scheduleRepo };