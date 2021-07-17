import express, { Request, Response, NextFunction, Router } from "express";
import Stores from '../schemas/store'

const storeRouter = express.Router();

storeRouter.get('/:pageNo', async (req, res) => {
  const pageNo = Number(req.params.pageNo);
  const stores = await Stores.find({});
  const stores_page:Array<object> = [];

  if (pageNo * 10 >= stores.length || pageNo < 0) {
    res.json({ message: "fail" });

    return;
  }

  for (let i: number = pageNo * 10; i < pageNo * 10 + 10; i ++) {
    stores_page.push(stores[i]);
  }

  res.json({ message: "success", stores: stores_page });
})

    
export { storeRouter };