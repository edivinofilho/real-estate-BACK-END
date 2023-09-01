import { Category } from "../entities"
import { AppError } from "../errors";
import { CategoryCreate, CategoryRead } from "../interfaces"
import { categoryRepo } from "../repositories"
import { categoriesCreateSchema } from "../schemas"

const createCategory = async (payload: CategoryCreate): Promise<Category> => {
  const newCategory: Category | null = categoryRepo.create(payload);

  await categoryRepo.save(newCategory)

  return newCategory;
};

const readCategory = async (): Promise<CategoryRead> => {
  const categories: CategoryRead = await categoryRepo.find();

  return categories;
};

const readCategoryRealEstate = async (id: number): Promise<Category> => {
  // const category: Category | null = await categoryRepo.findOneBy({ })

  const realEstateCategory: Category | null = await categoryRepo.findOne({
    where: 
    {id : id},
    relations: {
      realEstate: true
    }
  });

  if(!realEstateCategory) throw new AppError("Category not found", 404);

  return realEstateCategory;
};

export default { createCategory, readCategory, readCategoryRealEstate };