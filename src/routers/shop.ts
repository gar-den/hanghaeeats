import express, { Request, Response, NextFunction, Router } from "express";
import Shops from '../schemas/shop'

const shopRouter = express.Router();

shopRouter.post('/', async (req, res) => {
    const { name, category, image, orders, avgStar, countStar }
    : { name: string, category: string, image: string, orders: number, avgStar: string, countStar: number} = req.body;

    try {
        await Shops.create({ name, category, image, orders, avgStar, countStar });

        res.json({ message: "success" });
    } catch(err) {
        res.json({ message: "fail", err: err });
    }
    
    
});

export { shopRouter };