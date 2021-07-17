import jwt from "jsonwebtoken";
import Users from "./schemas/user";

import express, { Application, Request, Response, NextFunction } from 'express';


function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;

    try {
        if (authorization == null || authorization == undefined) {
            res.status(401).json({ message: "fail" });

            return;
        }

        const tokenArray = authorization.split(" ");
        const tokenScheme = tokenArray[0];

        if (tokenScheme != "Bearer") {
            res.status(401).json({ message: "fail" });

            return
        }

        const tokenValue = tokenArray[1];

        const user = jwt.verify(tokenValue, "gardenisthebest");
        const userId = (<any>user).userId ;

        Users.findOne({ _id: userId }).then((result: object) => {
            res.locals.user = result;

            next();
        }).catch((err: object) => {
            res.status(401).json({ message: "fail", err: err });
        })

    } catch(err) {
        res.status(401).json({ message: "fail", err: err });
    }
}

export { authMiddleware };