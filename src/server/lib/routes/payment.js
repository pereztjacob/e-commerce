import express from 'express';
import stripe from '../../constants/stripe';

let router = express.Router();


export default router
  .post('/charge', async(req, res, next) => {
    try {
      let { status } = await stripe.charges.create({
        amount: 2000,
        currency: 'usd',
        description: 'An example charge2',
        source: req.body
      });

      res.json({ status });
    } catch(err) {
      return next(err);
    }
  });