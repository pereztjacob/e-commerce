const router = require('express').Router();
const stripe = require('../../constants/stripe');

module.exports = router

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