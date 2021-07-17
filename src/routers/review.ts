import express, { Request, Response, NextFunction, Router } from "express";
import { MeasureOptions } from "perf_hooks";
import { authMiddleware } from '../auth-middleware';
import Reviews from '../schemas/review'
import Orders from '../schemas/order'

const reviewRouter = express.Router();

reviewRouter.post('/',authMiddleware, async (req, res) => {
    const { userId } = res.locals.user
    const { storeId, menuId,orderId,content,star } = req.body
    const date = new Date

    const isExistCheckReview = await Orders.findOne({ _id : orderId })
    if(isExistCheckReview.checkReview == true){
        res.status(400).json({message : "이미 리뷰를 작성하셨습니다."})
    } 
    Reviews.create({storeId, orderId, menuId, userId, date, content, star})
    isExistCheckReview.checkReview = true
    isExistCheckReview.updateOne()

    res.status(200).json({ message: 'success' });
    
    

    res.json({ message: "success" });
});

export { reviewRouter };

