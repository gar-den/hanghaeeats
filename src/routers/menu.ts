import express, { Request, Response, NextFunction, Router } from 'express';
import Menus from '../schemas/cart';

const MenusRouter = express.Router();

MenusRouter.post('/', async (req, res) => {
  res.json({ message: 'success' });
});

export { MenusRouter };
