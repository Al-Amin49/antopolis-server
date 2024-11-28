import mongoose from "mongoose";

const animalSchema= new mongoose.Schema(
    {
        name:{
            type:String,
            required:[true, 'Name is Required']
        },
        image:{
            type:String,
            required:[true, 'Image is required']
        }
    },
    {timestamps:true}
)

export const Animal= mongoose.model('Animal', animalSchema)