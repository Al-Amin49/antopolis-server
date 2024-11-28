import { TAnimal } from "./animal.type";
import mongoose from "mongoose";

const animalSchema = new mongoose.Schema<TAnimal>(
  {
    name: {
      type: String,
      required: [true, "Name is Required"],
    },
    image: {
      type: String,
      required: [true, "Image is required"],
    },
    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Category",
      required: [true, "Category is required"],
    },
  },
  { timestamps: true }
);

export const Animal = mongoose.model<TAnimal>("Animal", animalSchema);
