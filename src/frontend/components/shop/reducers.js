export const ADD_TO_CART = 'ADD_TO_CART';

export const cart = (state = null, { type, payload }) => {
  switch(type){
    case ADD_TO_CART:
      return payload;
    default:
      return state;
  }
};