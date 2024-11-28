import { Request, Response } from "express";
import apiResponse from "../utils/apiResponse";
import asyncHandler from "../utils/asyncHandler";
import { categoryServices } from "./category.service";


const createCategory = asyncHandler(async (req: Request, res: Response) => {
    const result = await categoryServices.createCategoryIntoDB(req.body);
    apiResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Category created successfully',
      data: result,
    });
  });

  const getAllCategory = asyncHandler(async (req: Request, res: Response) => {
    const result = await categoryServices.getAllCategoryFromDB();
    apiResponse(res, {
      statusCode: 200,
      success: true,
      message: 'Category retrive successfully',
      data: result,
    });
  });
  
export const categoryControllers={
    getAllCategory,
    createCategory
}