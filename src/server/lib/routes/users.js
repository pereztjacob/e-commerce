import express from 'express';
import { User } from '../models/User';
import { createEnsureAuth } from '../util/ensure-auth';
import { updateOptions } from '../util/mongoose-helpers';

const router = express.Router();
const ensureAuth = createEnsureAuth();

export default router
  .post('/', (req, res, next) => {
    User.create(req.body)
      .then(user => res.json(user))
      .catch(next);
  })

  .get('/', (req, res, next) => {
    User.find(req.query)
      .populate('owner', 'name')
      .lean()
      .then(users => res.json(users))
      .catch(next);
  })

  .get('/:id', (req, res, next) => {
    const { id } = req.params;
    User.findById(id)
      .populate('following', 'name')
      .lean()
      .select('_id name photo hobbies following cart')

      .then(user => res.json(user))
      .catch(next);
  })

  .put('/:id', (req, res, next) => {
    User.findByIdAndUpdate(req.params.id, req.body, updateOptions)
      .then(user => res.json(user))
      .catch(next);
  })
    
  .put('/:id/cart', (req, res, next) => {
    User.findByIdAndUpdate(
      req.params.id,
      { $push: { cart: req.body.cart } },
      updateOptions
    )
      .then(user => res.json(user))
      .catch(next);
  })

  .delete('/:id', ensureAuth, (req, res, next) => {
    const { id } = req.params;
    if(id !== req.body._id){
      throw {
        status: 403,
        error: 'User does not have access to update this user'
      };
    } else {
      User.findByIdAndRemove(id)
        .then(removed => res.json({ removed }))
        .catch(next);
    }
  });