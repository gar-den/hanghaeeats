import express, { Request, Response, NextFunction, Router } from 'express';
import Menus from '../schemas/menu';
import Shops from '../schemas/shop';

const menuRouter = express.Router();

menuRouter.post('/', async (req, res) => {
    
})

export { menuRouter };
