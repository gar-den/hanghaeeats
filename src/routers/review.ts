import express, { Request, Response, NextFunction, Router } from "express";
import { authMiddleware } from "../auth-middleware";
import Reviews from "../schemas/review";
import Orders from "../schemas/order";
import Stores from "../schemas/store"

const reviewRouter = express.Router();

reviewRouter.post("/", authMiddleware, async (req, res) => {
  const userId = res.locals.user._id;
  const nickname = res.locals.user.nickname
  const { orderId, content, star } = req.body;
  const date = new Date();
  try {
    const isExistCheckReview = await Orders.findOne({ _id: orderId }).exec();
    if (isExistCheckReview.checkReview == true) {
      return res.status(400).json({ message: "이미 리뷰를 작성하셨습니다." });
    }
    let menuIdList : Array<object> = []
    for (let i = 0; i<isExistCheckReview.menus.length; i++){
      menuIdList.push({ menuId : isExistCheckReview.menus[i].menuId , name : isExistCheckReview.menus[i].name })
    }
    
    
    const currentReview = await Reviews.create({
      storeId : isExistCheckReview.storeId,
      orderId,
      menuIdList : menuIdList,
      userId,
      nickname,
      date,
      content,
      star,
    });

    let targetStore = await Stores.findOne({_id : isExistCheckReview.storeId})
    let avgStar = targetStore.avgStar
    let countStar = targetStore.countStar
    
    let sumStar = avgStar * countStar + star

    countStar += 1
    avgStar = sumStar/countStar
    // const intAvgStar = Math.round(avgStar * 10) / 10
    targetStore.avgStar = avgStar
    targetStore.countStar = countStar
    await targetStore.save()
    
    isExistCheckReview.checkReview = true;
    await isExistCheckReview.save();
    // const reviewId = await Reviews.find({})

    res.status(200).json({ message: "success", reviewId: currentReview._id });
  } catch (err) {
    res.json({ message: "fail", err: err });
  }
});

reviewRouter.get("/:storeId", async (req, res) => {
  const { storeId } = req.params;
  try {
    const isReviewExist = await Reviews.find({ storeId: storeId }).exec();
    if (isReviewExist.length == 0) {
      return res.json();
    }
    res.status(200).json({ message: "success", review: isReviewExist });
  } catch (err) {
    res.json({ message: "fail", err: err });
  }
});

reviewRouter.put("/:reviewId", authMiddleware, async (req, res) => {
  const { reviewId } = req.params;
  const { content, star } = req.body;

  try {
    const review = await Reviews.findOne({ _id: reviewId });
    const userId = review.userId

    if (String(userId) != String(res.locals.user._id)) {
      res.json({ message: "wrong user" });

      return;
    }

    const changedReview = await Reviews.findOneAndUpdate(
      { _id: reviewId },
      { content, star }
    ).exec();
    res.status(200).json({ message: "success", review: changedReview });
  } catch (err) {
    res.json({
      message: "fail",
      err: err,
    });
  }
});

reviewRouter.delete("/:reviewId", authMiddleware, async (req, res) => {
  const { reviewId } = req.params;

  const review = await Reviews.findOne({ _id: reviewId });
  const userId = review.userId

  if (String(userId) != String(res.locals.user._id)) {
    res.json({ message: "wrong user" });

    return;
  }

  try {
    await Reviews.deleteOne({ _id: reviewId }).exec();
    res.status(200).json({ message: "success" });
  } catch (err) {
    res.json({
      message: "fail",
      err: err,
    });
  }
});

export { reviewRouter };
