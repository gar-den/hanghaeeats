import express, { Request, Response, NextFunction, Router } from 'express';
import { authMiddleware } from '../auth-middleware';
import Orders from '../schemas/order';
import Menus from '../schemas/menu';

const orderRouter = express.Router();

orderRouter.post('/', authMiddleware, async (req, res) => {
  const { storeId, menus } = req.body;

  const userId = res.locals.user._id
  const today = new Date();
  let price = 0;
  let menu_price = 0;
  let menu;

  for (let i = 0; i < menus.length; i ++) {
    menu = await Menus.findOne({ _id: menus[i].menuId });
    menu_price = menu.price;

    price += (menu_price * menus[i].count);
  }

  await Orders.create({ storeId, menus, userId, orderDate: today, price });
  
  const order = await Orders.findOne({ orderDate: today });

  res.json({ message: 'success', orderId: order._id });
});

orderRouter.get('/', authMiddleware, async (req, res) => {
  const userId = res.locals.user._id;

  const order = await Orders.find({ userId });

  res.json({ message: 'success', order });
})

export { orderRouter };
