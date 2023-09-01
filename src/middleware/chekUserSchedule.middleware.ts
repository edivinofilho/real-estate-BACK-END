import { NextFunction, Request, Response } from "express";
import { scheduleRepo } from "../repositories";
import { AppError } from "../errors";

const checkUserSchedule = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { date, hour } = req.body;
  const userId: number = Number(res.locals.decoded.sub);

  const userSameRealEstateSchedule = await scheduleRepo
    .createQueryBuilder("schedule")
    .where("schedule.date = :date", { date: date })
    .andWhere("schedule.hour = :hour", { hour: hour })
    .andWhere("schedule.userId = :userId", { userId: userId })
    .getOne();

  if (userSameRealEstateSchedule)
    throw new AppError(
      "User schedule to this real estate at this date and time already exists",
      409
    );

  return next();
};

export { checkUserSchedule };
