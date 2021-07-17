import express, { Request, Response, NextFunction, Router } from 'express';
import Menus from '../schemas/menu';
import Stores from '../schemas/store';

const menuRouter = express.Router();

menuRouter.post('/', async (req, res) => {
    
})

export { menuRouter };
