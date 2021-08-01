import express, { Application, Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";
import Users from "../schemas/user";
import passportRouter from "passport";
import GoogleStrategy, { Strategy } from "passport-google-oauth2";
import 'dotenv/config'

const passportConfig = () => {
    passportRouter.serializeUser((user, done) => {
        done(null, user);
    })
    
    passportRouter.deserializeUser((user: any, done) => {
        done(null, user);
    })
    
    passportRouter.use(new Strategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: "",
        callbackURL: "http://nameisgarden.xyz/api/user/google/callback"
      },
      async function(_:string, __:string, profile : any, done:GoogleStrategy.VerifyCallback) {
        const userId = profile.id;
        const email = profile.email;
        const nickname = profile.name.givenName;
        const provider = profile.provider

        let user: any;

        user = await Users.findOne({profile: [{provider: "google"}, {id: userId}]})

        if (!user) {
            await Users.create({ profile: [{provider: provider}, {id: userId}], email, nickname });

            user = await Users.findOne({profile: [{provider: "google"}, {id: userId}]})
        }

        const _id = user._id;

        const token = jwt.sign({ userId: _id }, "gardenisthebest");

        return done(null, profile, { message: token });
      }
    ));
}
export { passportConfig };
