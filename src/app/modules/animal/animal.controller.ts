import { Request, Response } from "express";
import asyncHandler from "../utils/asyncHandler";
import { animalServices } from "./animal.service";
import apiResponse from "../utils/apiResponse";


const createAnimal=asyncHandler(async(req:Request, res:Response)=>{
    const result= await animalServices.createAnimalIntoDB(req.body);

    apiResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Animal created successfully',
        data: result,
      });
})
const getAllAnimal=asyncHandler(async(req:Request, res:Response)=>{
    const result= await animalServices.getAllAnimalFromDB();

    apiResponse(res, {
        statusCode: 200,
        success: true,
        message: 'Animal fetched successfully',
        data: result,
      });
})

export const animalControllers={
createAnimal,
getAllAnimal

}

