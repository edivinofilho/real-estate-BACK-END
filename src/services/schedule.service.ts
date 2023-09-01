import { RealEstate, Schedule, User } from "../entities";
import { AppError } from "../errors";
import { ScheduleCreate, ScheduleList, ScheduleReturn } from "../interfaces/schedule.interface";
import { realEstateRepo, scheduleRepo } from "../repositories";

const scheduleCreate = async (
  payload: ScheduleCreate,
  user: User
): Promise<Schedule> => {
  const { realEstateId, date, hour } = payload;

  const foundRealEstate = await realEstateRepo.findOne({
    where: { id: realEstateId },
  });
  if (!foundRealEstate) throw new AppError("RealEstate not found", 404);

  //VERIFICAÇÕES --> Deveriam estar todos em middlewares?

  const scheduledHour: number = Number(hour.substring(0, 2));
  if (scheduledHour < 8 || scheduledHour > 18)
    throw new AppError("Invalid hour, available times are 8AM to 18PM", 400);

  const scheduledDate: Date = new Date(date);
  const scheduledDay: number = scheduledDate.getDay();
  if (scheduledDay === 0 || scheduledDay === 6)
    throw new AppError("Invalid date, work days are monday to friday", 400);

  // const userSameRealEstateSchedule = await scheduleRepo
  //   .createQueryBuilder("schedule")
  //   .where("schedule.date = :date", { date: date })
  //   .andWhere("schedule.hour = :hour", { hour: hour })
  //   .andWhere("schedule.userId = :userId", { userId: user.id })
  //   .andWhere("schedule.realEstateId = :realEstateId", { realEstateId: realEstateId })
  //   .getOne();
  // if (userSameRealEstateSchedule)
  //   throw new AppError("User schedule to this real estate at this date and time already exists", 409);

  const checkSchedule = await scheduleRepo
    .createQueryBuilder("schedule")
    .where("schedule.date = :date", { date: date })
    .andWhere("schedule.hour = :hour", { hour: hour })
    .getOne();
  if (checkSchedule)
    throw new AppError(
      "Schedule to this real estate at this date and time already exists",
      409
    );

  const schedule: Schedule = scheduleRepo.create({
    ...payload,
    user,
    realEstate: foundRealEstate,
    // Se não passar o user ele não associa
  });

  await scheduleRepo.save(schedule);

  return schedule;
};

const readRealEstateSchedule = async (id: number): Promise<RealEstate> => {
  const realEstateSchedule: RealEstate | null = await realEstateRepo.findOne({
    where:
    { id: id },
    relations: {
      address: true,
      category: true,
      schedules: {
        user: true
      }
    }
  });
  
  if(!realEstateSchedule) throw new AppError("RealEstate not found", 404);

  return realEstateSchedule;
} 

export default { scheduleCreate, readRealEstateSchedule };
