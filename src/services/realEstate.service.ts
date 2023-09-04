import { RealEstate } from "../entities";
import { AppError } from "../errors";
import { RealEstateCreate } from "../interfaces";
import { addressRepo, categoryRepo, realEstateRepo } from "../repositories";

const realEstateCreate = async (payload: RealEstateCreate) => {
  const { categoryId, address, ...body } = payload;

  const foundCategory = await categoryRepo.findOne({
    where: { id: categoryId },
  });
  if (!foundCategory) throw new AppError("Category not found", 404);

  const foundAddress = await addressRepo.findOne({ where: address });
  if (foundAddress) throw new AppError("Address already exists", 409);
  const newAddress = await addressRepo.save(address);

  const newRealEstate: RealEstate = realEstateRepo.create({
    ...body,
    address: newAddress,
    category: foundCategory,
  });

  await realEstateRepo.save(newRealEstate);

  return newRealEstate;
};

const realEstateRead = async (): Promise<Array<RealEstate>> => {
  const realEstateArray: Array<RealEstate> = await realEstateRepo.find({
    relations: { address: true },
  });

  return realEstateArray;
};

export default { realEstateCreate, realEstateRead };
