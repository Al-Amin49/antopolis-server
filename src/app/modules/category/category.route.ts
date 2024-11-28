import { categoryControllers } from './category.controller';
import express from 'express';

const router=express.Router();


router.get('/', categoryControllers.getAllCategory);
router.post('/', categoryControllers.createCategory);

export const categoryRoute= router;