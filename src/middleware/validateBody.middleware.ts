import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";

const validateBody =
  (schema: ZodTypeAny) =>
  (req: Request, res: Response, next: NextFunction): void => {
    req.body = schema.parse(req.body);

    return next();
  };

export { validateBody };
