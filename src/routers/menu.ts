import express, { Request, Response, NextFunction, Router } from 'express';
import Menus from '../schemas/cart';

const menuRouter = express.Router();

menuRouter.post('/', async (req, res) => {
  res.json({ message: 'success' });
});

export { menuRouter };
