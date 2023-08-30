import { NextFunction, Request, Response } from "express";
import { categoryRepo } from "../repositories";
import { AppError } from "../errors";
import { CategoryCreate, CategoryRead } from "../interfaces";
import { Category } from "../entities";

const validateCategoryName = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const categoryName: string = req.body.name;
  const findCategoryName: Category | null = await categoryRepo.findOneBy({ name: categoryName});
  
  if(findCategoryName) throw new AppError("Category already exists", 409);

  return next();
};

export { validateCategoryName };