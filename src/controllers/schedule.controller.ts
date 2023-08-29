import { Request, Response } from "express";
import { Schedule, User } from "../entities";
import scheduleService from "../services/schedule.service";

const scheduleCreate = async (req: Request, res: Response): Promise<Response> => {

  const user: User = res.locals.foundUser

  const schedule = await scheduleService.scheduleCreate(req.body, user)

  return res.status(201).json(schedule)
};

export default { scheduleCreate };