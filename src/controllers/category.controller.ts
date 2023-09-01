import { Request, RequestHandler, Response, request } from "express";
import { Category } from "../entities";
import categoryService from "../services/category.service";
import { CategoryRead } from "../interfaces";

const categoryCreate = async (req: Request, res: Response): Promise<Response> => {
  const category: Category | null = await categoryService.createCategory(req.body); 

  return res.status(201).json(category)
};

const readCategory = async (req: Request, res: Response): Promise<Response> => {
  const categories: CategoryRead | null = await categoryService.readCategory();

  return res.status(200).json(categories);
};

const readRealEstateCategory = async (req: Request, res: Response): Promise<Response> => {
  const id: number = Number(req.params.id);
  const realEstateCategories = await categoryService.readCategoryRealEstate(id);  

  return res.status(200).json(realEstateCategories);
};

export default { categoryCreate, readCategory, readRealEstateCategory };