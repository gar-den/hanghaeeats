import express, { Request, Response, NextFunction, Router } from "express";
import Menus from "../schemas/menu";
import Stores from "../schemas/store";

const menuRouter = express.Router();

menuRouter.get("/:storeId", async (req, res) => {
  const { storeId } = req.params;
  console.log(storeId);
  try {
    const menus = await Menus.find({ storeId: storeId }).exec();
    console.log(menus);
    res.status(200).json({ message: "success", menus: menus });
  } catch (err) {
    res.status(400).json({ message: "fail", err: err });
  }
});

export { menuRouter };
