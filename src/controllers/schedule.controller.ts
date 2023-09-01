import { Request, Response } from "express";
import { User } from "../entities";
import scheduleService from "../services/schedule.service";

const scheduleCreate = async (req: Request, res: Response): Promise<Response> => {
  const user: User = res.locals.foundUser
  await scheduleService.scheduleCreate(req.body, user)

  return res.status(201).json({message: "Schedule created"})
};

const realEstateSchedules = async (req: Request, res: Response): Promise<Response> => {
  const id: number = Number(req.params.id);
  const realEstateSchedules = await scheduleService.readRealEstateSchedule(id)

  return res.status(200).json(realEstateSchedules)
}

export default { scheduleCreate, realEstateSchedules };