import { ADD_TO_CART } from './reducers';
import projectsApi from '../../services/api';

export const addToCartAction = (cart, id) => (
  {
    type: ADD_TO_CART,
    payload: projectsApi.addtocart(cart, id)
  });