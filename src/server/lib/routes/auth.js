import express from 'express';
import { respond } from './route-helpers';
import { sign } from '../util/token-service';
import { User } from '../models/User';
import { createEnsureAuth } from '../util/ensure-auth';

const router = express.Router();

const hasEmailAndPassword = ({ body }, res, next) => {
  const { email, password } = body;
  if(!email || !password) {
    throw {
      status: 400,
      error: 'Email and password are required'
    };
  }
  next();
};

export default router

  .get('/verify', createEnsureAuth(), respond(
    () => Promise.resolve({ verified: true })
  ))

  .post('/signup', hasEmailAndPassword, respond(
    ({ body }) => {

      const { email, password } = body;
      delete body.password;

      console.log(User);

      return User.findOne({ email })
        .then(res => {
          console.log(res);
          const user = new User(body);
          user.generateHash(password);
          return user.save();
        })
        .then(user => {
          console.log(sign(user));
          return {
            token: sign(user),
            _id: user._id,
            name: user.name,
            email: user.email,
            cart: user.cart
          };
        });
    }))

  .post('/signin', hasEmailAndPassword, respond(
    ({ body }) => {
      const { email, password } = body;
      delete body.password;

      return User.findOne({ email })
        .then(user => {
          if(!user || !user.comparePassword(password)){
            throw {
              status: 401,
              error: 'Invalid email or password'
            };
          }
          return { 
            token: sign(user),
            name: user.name,
            email: user.email,
            _id: user.id,
            hobbies: user.hobbies,
            photo: user.photo,
            following: user.following
          };
        });
    }
  ));