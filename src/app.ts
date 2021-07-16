import express, { Application, Request, Response, NextFunction } from 'express';
// import { cartRouter } from "./routers/cart";
// import { menuRouter } from "./routers/menu";
// import { orderRouter } from "./routers/order";
// import { reviewRouter } from "./routers/review";
import { shopRouter } from "./routers/shop";
// import { userRouter } from "./routers/user";
import { connect } from './schemas'

const app = express(); // variable automatically inferred as Application
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const port = 5000;

connect();

// APIs
// app.use('/api/user', [userRouter]);
// app.use('/api/cart', [cartRouter]);
// app.use('/api/menu', [menuRouter]);
// app.use('/api/review', [reviewRouter]);
// app.use('/api/order', [orderRouter]);
app.use('/api/shop', [shopRouter]);

app.listen(5000, () => {
    console.log("listening at http://localhost:5000");
})