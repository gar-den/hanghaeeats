import express, { Request, Response, NextFunction, Router } from "express";
import Users from '../schemas/user';
import Stores from '../schemas/store';
import { authMiddleware } from "../auth-middleware";

import joi from "joi";
import jwt from "jsonwebtoken";
import crypto from "crypto";

const userRouter = express.Router();

const joiSchema = joi.object({
    email: joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
    nickname: joi.string().min(3).max(30).required(),
    password: joi.string().pattern(new RegExp('^[a-zA-Z0-9]{4,30}$')),
    confirmPassword: joi.ref('password'),
    phone: joi.string().min(10).max(11)
})

// register
userRouter.post('/', async (req, res) => {
    const { email, nickname, password, confirmPassword, phone } = req.body;

    const existUser = await Users.findOne({ nickname, email });
    if (existUser) {
        res.json({ message: "fail", err: "existed user" });
        
        return;
    }

    const { value, error } = joiSchema.validate({
        email, nickname, password, confirmPassword, phone
    });

    if (!error) {
        const crypted_password = crypto.createHmac('sha256', password).update('eats').digest('hex');
        await Users.create({ email, nickname, password: crypted_password, phone });

        res.json({ message: "success" });
    } else {
        res.json({ message: "fail", err: error.details[0].message });
    }

    
});

// login
userRouter.post('/auth', async (req, res) => {
    let { email, password } = req.body;

    const crypted_password = crypto.createHmac('sha256', password).update('eats').digest('hex');
    const user = await Users.findOne({ email })

    if (user.password != crypted_password) {
        res.json({ message: "fail" });

        return
    }

    const token = jwt.sign({ userId: user._id }, "gardenisthebest");

    res.json({ message: "success", token: token });
});

// if the person is logined
userRouter.get('/me', authMiddleware, async (req, res) => {
    const user = res.locals.user;

    if (!user) {
        res.json({ message: "fail" });

        return
    }

    res.json({ message: "success", user: user.nickname });
});

// like a store
userRouter.post('/like-a-store', authMiddleware, async (req, res) => {
    let { storeId } = req.body;

    const existStore = await Stores.findOne({ _id: storeId });
    
    if (existStore) {
        const storeId = existStore._id;
        const userId = res.locals.user._id;

        // if i already liked it
        const like_array = res.locals.user.like_array;
        if (like_array.includes(storeId)) {
            console.log("includes");

            res.json({ message: "fail" });

            return;
        }

        await Users.updateOne({ _id: userId }, { $push: { like_array: storeId } });

        res.json({ message: "success" });
    } else {
        res.json({ message: "fail" });
    }
})

// unlike a store
userRouter.post('/unlike-a-store', authMiddleware, async (req, res) => {
    let { storeId } = req.body;

    const existStore = await Stores.findOne({ _id: storeId });

    if (existStore) {
        const storeId = existStore._id;
        const userId = res.locals.user._id;

        // if i already liked it
        const like_array = res.locals.user.like_array;
        if (like_array.includes(storeId)) {
            await Users.updateOne({ _id: userId }, {$pull: { like_array: storeId }});

            res.json({ message: "success" });

            return;
        } else {
            res.json({ message: "fail" });
        }
    }
})

// get liked stores
userRouter.get('/like-stores', authMiddleware, async (req, res) => {
    const like_array = res.locals.user.like_array;

    // only id of stores
    res.json({ message: "success", stores: like_array });
})

// check if i liked a store
userRouter.get('/like-stores/:storeId', authMiddleware, async (req, res) => {
    const storeId = req.params.storeId;

    const like_array = res.locals.user.like_array;
;    if (like_array.includes(storeId)) {
        res.json({ message: "success", liked: true });
    } else {
        res.json({ message: "success", liked: false });
    }
})

export { userRouter };