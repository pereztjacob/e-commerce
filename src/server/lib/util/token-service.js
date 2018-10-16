import jwt from 'jsonwebtoken';
const APP_SECRET = process.env.APP_SECRET || 'cardinals';

export const sign = (user) => {
  const payload = {
    id: user._id,
    roles: user.roles 
  };
  return jwt.sign(payload, APP_SECRET);
};

export const verify = (token) => {
  return jwt.verify(token, APP_SECRET);
};