import express, { Request, Response, NextFunction, Router } from "express";
import { authMiddleware } from '../auth-middleware';
import Reviews from '../schemas/review'
import Orders from '../schemas/order'
import review from "../schemas/review";

const reviewRouter = express.Router();

reviewRouter.post('/',authMiddleware, async (req, res) => {
    const { userId } = res.locals.user
    const { storeId, menuIdList,orderId,content,star } = req.body
    const date = new Date
    try{
        const isExistCheckReview = await Orders.findOne({ _id : orderId }).exec()
    if(isExistCheckReview.checkReview == true){
        return res.status(400).json({message : "이미 리뷰를 작성하셨습니다."})
    } 
    const currentReview = await Reviews.create({storeId, orderId, menuIdList, userId, date, content, star})
    isExistCheckReview.checkReview = true
    await isExistCheckReview.save()
    // const reviewId = await Reviews.find({})

    res.status(200).json({ message: 'success', reviewId: currentReview._id});
    }catch(err){
        res.status(400).json({message:"fail", err:err})
    }
    
});

reviewRouter.get('/:storeId', async (req,res) => {
    const { storeId } = req.params
    try{
    const isReviewExist = await Reviews.find({storeId : storeId}).exec()
    if (isReviewExist.length == 0){
        return res.status(400).json({message : "리뷰가 존재하지 않습니다."})
    }
    res.status(200).json({message:"success", review : isReviewExist})
        
    } catch(err){
        res.status(400).json({message : "fail", err : err})
    }

})

reviewRouter.put('/:reviewId', async (req,res) => {    
    const { reviewId } = req.params
    const { content, star } = req.body

    try{
        const changedReview = await Reviews.findOneAndUpdate({_id:reviewId},{ content, star }).exec()      
        res.status(200).json({message : "success", review : changedReview })
    }catch(err){
        res.status(400).json({
            message : "fail", err: err
        })
    }  
})

reviewRouter.delete('/:reviewId', async (req,res) => {    
    const { reviewId } = req.params

    try{
        await Reviews.deleteOne({_id:reviewId}).exec()      
        res.status(200).json({message : "success" })
    }catch(err){
        res.status(400).json({
            message : "fail", err: err
        })
    }  
})



export { reviewRouter };

