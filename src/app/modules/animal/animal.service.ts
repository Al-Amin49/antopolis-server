import { Animal } from "./animal.model"
import { TAnimal } from "./animal.type";

const addAnimal = async (animalData:TAnimal) => {
    const animal = new Animal(animalData);
    return await animal.save();
  };

const getAllAnimal=async()=>{
    const result =await Animal.find().populate('category');
    return result;
}

export const animalServices={
    addAnimal,
    getAllAnimal
}