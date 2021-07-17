import express, { Request, Response, NextFunction, Router } from "express";
import Shops from '../schemas/shop'

const shopRouter = express.Router();

shopRouter.post('/', async (req, res) => {
    
})
    
export { shopRouter };