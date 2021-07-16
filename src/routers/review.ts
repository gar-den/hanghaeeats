import express, { Request, Response, NextFunction, Router } from "express";
import Reviews from '../schemas/review'

const reviewRouter = express.Router();

reviewRouter.post('/', async (req, res) => {
    res.json({ message: "success" });
});

export { reviewRouter };