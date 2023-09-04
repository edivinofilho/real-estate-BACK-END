import { Request, Response } from "express";
import scheduleService from "../services/schedule.service";

const scheduleCreate = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const userId = res.locals.decoded.sub;
  await scheduleService.scheduleCreate(req.body, userId);

  return res.status(201).json({ message: "Schedule created" });
};

const realEstateSchedulesController = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const id: number = Number(req.params.id);
  const realEstateSchedules =
    await scheduleService.readRealEstateScheduleService(id);

  return res.status(200).json(realEstateSchedules);
};

export default { scheduleCreate, realEstateSchedulesController };
