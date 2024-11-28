import express from 'express';
import { animalControllers } from './animal.controller';

const router= express.Router();


router.get('/', animalControllers.getAllAnimal);
router.post('/', animalControllers.createAnimal);


export const animalRoute= router;