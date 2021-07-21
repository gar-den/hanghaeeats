import express, { Application, Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import Users from "../schemas/user";
import passportRouter from "passport";
import { Strategy } from "passport-kakao";
const kakaoPassportConfig = () => {
    passportRouter.serializeUser((user, done) => {
        done(null, user);
    })
    
    passportRouter.deserializeUser((user: any, done) => {
        done(null, user);
    })
    
    passportRouter.use(new Strategy({
        clientID: "89c020b3b307f237f8e3e3135ce353cf",
        clientSecret: "",
        callbackURL: "http://3.36.97.199/api/user/kakao/callback"
        // callbackURL: "http://nameisgarden.xyz/api/user/google/callback"
      },async (_:string, __:string, profile : any, done : any) => {
        const userId = profile.id;
        const nickname = profile.username;
        const provider = profile.provider;
        
        let user: any;

        user = await Users.findOne({profile: [{provider: "kakao"}, {id: userId}]})

        if (!user) {
          await Users.create({ profile: [{provider: provider}, {id: userId}], nickname });

          user = await Users.findOne({profile: [{provider: "kakao"}, {id: userId}]})
      }

      const _id = user._id;

      const token = jwt.sign({ userId: _id }, 'gardenisthebest');

      return done(null, user, token);
      }
    ));
}
export { kakaoPassportConfig };