import express, { Request, Response, NextFunction, Router } from "express";
import { authMiddleware } from '../auth-middleware';
import Reviews from '../schemas/review'
import Orders from '../schemas/order'

const reviewRouter = express.Router();

reviewRouter.post('/',authMiddleware, async (req, res) => {
    const { userId } = res.locals.user
    const { storeId, menuIdList,orderId,content,star } = req.body
    const date = new Date

    const isExistCheckReview = await Orders.findOne({ _id : orderId }).exec()
    if(isExistCheckReview.checkReview == true){
        return res.status(400).json({message : "이미 리뷰를 작성하셨습니다."})
    } 
    await Reviews.create({storeId, orderId, menuIdList, userId, date, content, star})
    isExistCheckReview.checkReview = true
    await isExistCheckReview.save()

    res.status(200).json({ message: 'success' });
});

export { reviewRouter };

