import { Address, RealEstate } from "../entities";
import { AppError } from "../errors";
import { AddressCreate, AddressRead, CategoryCreate, CategoryRead, RealEstateCreate, RealEstateRead } from "../interfaces";
import { addressRepo, categoryRepo, realEstateRepo } from "../repositories";

const realEstateCreate = async (payload: RealEstateCreate) => {
  const { categoryId, address, ...body} = payload;
  /* 
  1. Chamar o repositório de address
  2. Criar um address
  3. verificar se este address já existe
  4. Procurar se esta categoria existe
  5. Adicionar o address e a category no RelEstate
  */

  //Category já criada anteriormente
  // Sold: Default false

  //Para verificar se o address já existe use um findOne passando o address
 
  const foundCategory = await categoryRepo.findOne({ 
    where: 
    { id: categoryId }
  });
  if(!foundCategory) throw new AppError("Category not found", 404);

  const foundAddress = await addressRepo.findOne({where: address });
  if(foundAddress) throw new AppError("Address already exists", 409);
  const newAddress = await addressRepo.save(address);

    const newRealEstate: RealEstate = realEstateRepo.create({
    ...body,
    address: newAddress,
    category: foundCategory
  });

  await realEstateRepo.save(newRealEstate);

  return newRealEstate;
};

const realEstateRead = async (): Promise<Array<RealEstate>> => {
  const realEstateArray: Array<RealEstate> = await realEstateRepo.find({
    relations: { address: true }
  }); 
  
  return realEstateArray; 
}

export default { realEstateCreate, realEstateRead };