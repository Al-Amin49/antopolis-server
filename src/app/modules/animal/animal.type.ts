import mongoose from "mongoose";

export type TAnimal = {
  name: string;
  image: string;
  category: mongoose.Types.ObjectId;
};
