import express, { Application, Request, Response, NextFunction } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import session from "express-session";
import passport from "passport";

import { cartRouter } from "./routers/cart";
import { orderRouter } from "./routers/order";
import { reviewRouter } from "./routers/review";
import { storeRouter } from "./routers/store";
import { userRouter } from "./routers/user";
import { menuRouter } from "./routers/menu";

import { passportConfig } from "./routers/passport";

// crawling
import { storePost } from "./postData/store";
import { menuPost } from "./postData/menu";

import { connect } from "./schemas";

const app = express(); // variable automatically inferred as Application
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(bodyParser.json());

app.use(cors());  // open for everyone

const port = 5000;

connect();

app.use(session({secret: "secret key", resave: false, saveUninitialized: false}));

// passport 초기화 및 session 연결
app.use(passport.initialize())
app.use(passport.session())

passportConfig();

app.get('/', (req, res) => {
  if (!req.session.token) return res.redirect("/login");

  console.log(req.session.token);
  const token = req.session.token
  req.session.token = "";

// res.send(`
//   <h1>MAIN</h1>
//   Welcome to back :-)<br>-NODEMAN<br>
//   <a href="/logout">logout</a>
// `);
});

app.get('/login', (req, res) => {
  if (req.session.token) return res.redirect("/");

  res.send(`
    <form method="GET" action="/api/user/google">
      <input id="google_login_btn" type="submit" name="">
    </form>
  `)
})

app.get('/logout', (req, res, next) => {
  req.logout();
  res.redirect("/login");
})

// APIs
app.use("/api/user", [userRouter]);
app.use("/api/cart", [cartRouter]);
app.use("/api/review", [reviewRouter]);
app.use("/api/order", [orderRouter]);
app.use("/api/store", [storeRouter]);
app.use("/api/menu", [menuRouter]);

// app.use("/api/user", [passportRouter]);

// crwaling
app.use("/api/crawling/store", [storePost]);
app.use("/api/crawling/menu", [menuPost]);

app.listen(5000, () => {
  console.log("listening at http://localhost:5000");
});
