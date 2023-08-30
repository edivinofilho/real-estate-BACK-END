import { Category } from "../entities"
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
}

export default { createCategory, readCategory };