import express, { Request, Response, NextFunction, Router } from 'express';
import Orders from '../schemas/cart';

const OrdersRouter = express.Router();

OrdersRouter.post('/', async (req, res) => {
  res.json({ message: 'success' });
});

export { OrdersRouter };
