import { Request, Response } from "express";
import { realEstateServices } from "../services";

const createRealEstate = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const newRealEstate = await realEstateServices.realEstateCreate(req.body);

  return res.status(201).json(newRealEstate);
};

const readRealEstate = async (
  req: Request,
  res: Response
): Promise<Response> => {
  const readAllRealEstate = await realEstateServices.realEstateRead();

  return res.status(200).json(readAllRealEstate);
};

export default { createRealEstate, readRealEstate };
