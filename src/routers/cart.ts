import express, { Request, Response, NextFunction, Router } from "express";
import Carts from "../schemas/cart";

const cartRouter = express.Router();

cartRouter.post("/", async (req, res) => {
  res.json({ message: "success" });
});

export { cartRouter };
