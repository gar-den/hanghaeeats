import express, { Request, Response, NextFunction, Router } from 'express';
import Carts from '../schemas/cart';

const CartRouter = express.Router();

CartRouter.post('/', async (req, res) => {
  res.json({ message: 'success' });
});

export { CartRouter };
