export const SIGN_UP = 'SIGN_UP';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

export const auth = (state = null, { type, payload }) => {
  switch(type) {
    case SIGN_UP:
    case SIGN_IN:
      return payload;
    case SIGN_OUT:
      return payload;
    default:
      return state;
  }
};