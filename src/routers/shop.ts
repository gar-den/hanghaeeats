import express, { Request, Response, NextFunction, Router } from "express";
import Shops from '../schemas/shop'

const shopRouter = express.Router();

shopRouter.post('/', async (req, res) => {
    res.json({ message: "success" });
});

export { shopRouter };