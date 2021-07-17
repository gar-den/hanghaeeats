import express, { Application, Request, Response, NextFunction } from 'express';
import { cartRouter } from './routers/cart';
import { orderRouter } from './routers/order';
import { reviewRouter } from './routers/review';
import { shopRouter } from './routers/shop';
import { userRouter } from './routers/user';
import { menuRouter } from './routers/menu';

// crawling
import { shopPost } from './postData/shop';
import { menuPost } from './postData/menu';

import { connect } from './schemas';

const app = express(); // variable automatically inferred as Application
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const port = 5000;

connect();

// APIs
app.use('/api/user', [userRouter]);
app.use('/api/cart', [cartRouter]);
app.use('/api/review', [reviewRouter]);
app.use('/api/order', [orderRouter]);
app.use('/api/shop', [shopRouter]);
app.use('/api/menu', [menuRouter]);

// crwaling
app.use('/api/crawling/shop', [shopPost]);
app.use('/api/crawling/menu', [menuPost]);


app.listen(5000, () => {
  console.log('listening at http://localhost:5000');
});
