import { verify } from './token-service';

export const createEnsureAuth = () => {
  return (req, res, next) => {
    const token = req.get('Authorization');
    try {
      if(!token) return next({ status: 400, error: 'No token found' });
      const payload = verify(token);
      req.reviewer = payload;
      next();
    }
    catch(err) {
      next({
        status: 401,
        error: 'Invalid token'
      });
    }
  };
}