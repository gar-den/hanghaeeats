import express, { Request, Response, NextFunction, Router } from "express";
import { authMiddleware } from "../auth-middleware";
import Orders from "../schemas/order";
import Menus from "../schemas/menu";
import Stores from "../schemas/store";

const orderRouter = express.Router();

orderRouter.post("/", authMiddleware, async (req, res) => {
  const { storeId, menus } = req.body;

  const userId = res.locals.user._id;
  const today = new Date();
  let price = 0;
  let menu_price = 0;
  let menu;

  for (let i = 0; i < menus.length; i++) {
    menu = await Menus.findOne({ _id: menus[i].menuId });
    menu_price = menu.price;

    price += menu_price * menus[i].count;
   }

  // let ship_fee = 0
  // if (price < 50000) {
  //   price += 2000;

  //   ship_fee = 2000;
  // }

  await Orders.create({ storeId, menus, userId, orderDate: today, price });
  await Stores.updateOne({ _id: storeId }, { $inc: { orders: 1 } });

  const order = await Orders.findOne({ orderDate: today });

  res.json({ message: "success", orderId: order._id });
});

orderRouter.get("/", authMiddleware, async (req, res) => {
  const userId = res.locals.user._id;

  const orders = await Orders.find({ userId });

  res.json({ message: "success", orders: orders });
});

orderRouter.delete("/:orderId", authMiddleware, async (req, res) => {
  const orderId = req.params.orderId;

  try {
    const store = await Orders.findOne({ _id: orderId });
    const storeId = store.storeId;

    await Stores.updateOne({ _id: storeId }, { $inc: { orders: -1 } });
    await Orders.deleteOne({ _id: orderId });

    res.json({ message: "success" });
  } catch (err) {
    res.json({ message: "fail", err });
  }
});

export { orderRouter };
