import express, { Request, Response, NextFunction, Router } from 'express';
import Orders from '../schemas/cart';

const orderRouter = express.Router();

orderRouter.post('/', async (req, res) => {
  res.json({ message: 'success' });
});

export { orderRouter };
