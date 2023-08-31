import { Request, Response } from "express";
import { realEstateServices } from "../services";

const createRealEstate = async (req: Request, res: Response): Promise<Response> => {
  const newRealEstate = await realEstateServices.realEstateCreate(req.body);

  return res.status(201).json(newRealEstate);
};

export default { createRealEstate };