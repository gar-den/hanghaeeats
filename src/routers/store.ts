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

storeRouter.get('/', async (req, res) => {
  const searchWord = req.query.q
  console.log(req.query)
  try{
      const searchedStores = await Stores.find({ name : searchWord }).exec()

      if (!searchedStores){
        return res.status(400).json({
          message : "해당 정보가 존재하지 않습니다."
        })
      } 
      res.status(200).json({
          message : "success",
          stores : searchedStores,
      }) 
  } catch (err) {
      res.status(400).json({
        message: 'fail',
        err: err,
      });
  }
  
})

    
export { storeRouter };