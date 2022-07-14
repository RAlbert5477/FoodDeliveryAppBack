import {Router} from "express";

const cart = []

export const cartRouter = Router();



cartRouter
    .get('/', async (req, res) => {
        res.json(cart);
    })
    .post('/', async (req, res) => {
        const newFood={
                id: req.body.id,
                title: req.body.title,
                calories: req.body.calories,
                carbs: req.body.carbs,
                protein: req.body.protein,
                fat: req.body.fat,
                price: req.body.price,
                image: req.body.image,
                quantity: req.body.quantity
            };
        cart.push(newFood);

        res.json({cart});
        // res.send('Added item to cart')
        console.log(cart)

    })
    .delete("/" , async(req, res)=>{
        cart.splice(0, cart.length);
        console.log(cart)
        res.json(cart)
    })