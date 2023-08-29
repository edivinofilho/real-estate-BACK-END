import { Schedule, User } from "../entities";
import { ScheduleCreate, ScheduleReturn } from "../interfaces/schedule.interface";
import { scheduleRepo } from "../repositories";
import { scheduleSchema } from "../schemas";

const scheduleCreate = async (payload: ScheduleCreate, user: User): Promise<ScheduleReturn> => {
  const schedule: Schedule = scheduleRepo.create({
    ...payload,
    user

    // Se não passar o user ele não associa
  });

  await scheduleRepo.save(schedule);

  return scheduleSchema.parse(schedule);
};

export default { scheduleCreate };