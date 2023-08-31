import { Address, RealEstate } from "../entities";
import { AppError } from "../errors";
import { AddressCreate, AddressRead, CategoryCreate, CategoryRead, RealEstateRead, RealEstateWithAddress } from "../interfaces";
import { addressRepo, categoryRepo, realEstateRepo } from "../repositories";

const realEstateCreate = async (payload: RealEstateWithAddress): Promise<void> => {
  const address = payload.address;

  console.log(payload)

  // const { street, number } = address;
  // const findAddress: Address | null = await addressRepo.findOne({
  //   where: {street: street, number: number}
  // })
  // if(address === findAddress) throw new AppError("Address already exists", 409);

  // const category = await categoryRepo.findOneBy({ id: payload.categoryId });
  
  // const newAddress: Address = addressRepo.create(address);

  // await addressRepo.save(newAddress);

  // const newRealEstate: RealEstate = realEstateRepo.create({
  //   ...payload,
  //   category: category!,
  //   address: newAddress
  // });

  // await realEstateRepo.save(newRealEstate);

  // return newRealEstate;
};

export default { realEstateCreate };