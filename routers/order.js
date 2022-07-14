import {Router} from "express";
import {v4 as uuid} from "uuid";

export const orderRouter = Router();

const order = [];

orderRouter
    .get('/', async (req, res) => {
        res.json(order);
    })
    .post("/", (req, res) => {
        const newOrder = {
            id: uuid(),
            time: req.body.time,
            order: req.body.order,
        }
        order.push(newOrder)
    })
