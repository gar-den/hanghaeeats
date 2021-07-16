import express, { Request, Response, NextFunction, Router } from "express";
import Users from '../schemas/user';

const userRouter = express.Router();

userRouter.post('/', async (req, res) => {
    res.json({ message: "success" });
});

export { userRouter };