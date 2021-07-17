import express, { Request, Response, NextFunction, Router } from "express";
import Stores from '../schemas/store'

const storeRouter = express.Router();

storeRouter.post('/', async (req, res) => {
    
})
    
export { storeRouter };