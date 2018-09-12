import { SIGN_UP, SIGN_IN, SIGN_OUT } from './reducers';
import apiFunctions from '../../services/api';

export const updateUser = (url, id) => {
  apiFunctions.updateuser(url, id);
};

export const signUp = data => (
  {
    type: SIGN_UP,
    payload: apiFunctions.signup(data)
  });

export const signIn = data => (
  {
    type: SIGN_IN,
    payload: apiFunctions.signin(data)
  });

export const signOut = () => (
  localStorage.clear(),
  {
    type: SIGN_OUT,
    payload: null
  });