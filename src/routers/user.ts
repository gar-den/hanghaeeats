import express, { Request, Response, NextFunction, Router } from "express";
import Users from '../schemas/user';

const userRouter = express.Router();

// register
userRouter.post('/', async (req, res) => {
    res.json({ message: "success" });
});

// login
userRouter.post('/auth', async (req, res) => {
    res.json({ message: "success" });
});

// if the person is logined
userRouter.get('/me', async (req, res) => {
    res.json({ message: "success" });
});

// like a store

// get liked stores

// check if i liked a store

export { userRouter };