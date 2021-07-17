import express, { Request, Response, NextFunction, Router } from "express";
import Stores from '../schemas/store'

const storeRouter = express.Router();

//가게 전부 가져오기 (query값 입력하지 않으면 됨)
// 정해진 카테고리에 맞는 가게 전부 가져오기
storeRouter.get('/', async (req, res) => {
  const { category } = req.query
  try{        
      const categorizedStores = await Stores.find({ category : category }).exec()
      res.status(200).json({
          message : "success",
          stores : categorizedStores,
      }) 
  } catch (err) {
      res.status(400).json({
        message: 'fail',
        err: err,
      });
  }
  
})
// pagenation
storeRouter.get('/all/:pageNo', async (req, res) => {
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

// 검색기능
storeRouter.get('/search', async (req,res) => {
  const keyword = req.query.q
  
  try{
    let searchList = []
  const allStore = await Stores.find({}).exec()
  for (let i =0; i<allStore.length; i++){
    const storeName = allStore[i].name
    if (storeName.includes(keyword)){
      searchList.push(allStore[i])
    }}    
    res.status(200).json({
      message : "success", searchList : searchList
    })  
  }catch(err){
    res.status(400).json({
      message : "fail", err : err
    })
  }
})



export { storeRouter };