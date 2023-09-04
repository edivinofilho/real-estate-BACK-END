import { Request, Response } from "express";
import { User } from "../entities";
import scheduleService from "../services/schedule.service";
import { scheduleRepo } from "../repositories";

const scheduleCreate = async (req: Request, res: Response): Promise<Response> => {
  const userId = res.locals.decoded.sub;
  const scheduleCreated = await scheduleService.scheduleCreate(req.body, userId)

  console.log(scheduleCreated)
  return res.status(201).json(scheduleCreated) //{message: "Schedule created"}
};

const realEstateSchedulesController = async (req: Request, res: Response): Promise<Response> => {
  const id: number = Number(req.params.id);
  const realEstateSchedules = await scheduleService.readRealEstateScheduleService(id)

  // const schedules = await scheduleRepo.find()
  // console.log(schedules)
  return res.status(200).json(realEstateSchedules)
}

export default { scheduleCreate, realEstateSchedulesController };