import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

const validateAdmin = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const { admin, sub } = res.locals.decoded;
  const id: string = req.params.id;

  if (admin) return next();

  if (Number(sub) !== Number(id))
    throw new AppError("Insufficient permission", 403);

  return next();
};

export default validateAdmin;
