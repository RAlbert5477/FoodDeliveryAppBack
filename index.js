import express from "express";
import cors from "cors";
import "express-async-errors";
import cookieParser from "cookie-parser";
import {orderRouter} from "./routers/order.js";
import {cartRouter} from "./routers/cart.js";
import {handleError} from "./utils/errors.js";

const app = express();
app.use(express.json());
app.use(cors({
    origin: 'http://localhost:3000'
}));
app.use(cookieParser());


app.use('/order', orderRouter);
app.use('/cart', cartRouter);


app.use(handleError);

app.listen(3001, '0.0.0.0', () => {
    console.log('Listening on http://localhost:3001');
});