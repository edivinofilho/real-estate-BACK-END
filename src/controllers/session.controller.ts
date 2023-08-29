import { Request, Response } from "express";
import { SessionReturn } from "../interfaces";
import sessionService from "../services/session.service";

const sessionCreate = async (req: Request, res: Response): Promise<Response> => {
  const token: SessionReturn = await sessionService.sessionCreate(req.body);

  return res.status(200).json(token);
};

export default { sessionCreate };