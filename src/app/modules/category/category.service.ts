import { Category } from "./category.model";
import { TCategory } from "./category.type";

const createCategoryIntoDB = async ( categoryData:TCategory) => {
    const category = new Category(categoryData);
    return await category.save();
  };
  
  const getAllCategoryFromDB = async () => {
    const result = await Category.find();
    return result;
  };

  export const categoryServices={
    createCategoryIntoDB,
    getAllCategoryFromDB
  }