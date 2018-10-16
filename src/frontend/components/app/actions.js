import { SIGN_IN } from '../auth/reducers';
import { LOAD_USER } from './reducers';
import projectsApi from '../../services/api';
import { REMOVE_ERROR } from './error-loading/reducers';

export const setUserToState = auth => (
  {
    type: SIGN_IN,
    payload: auth
  });

export const loadUser = id => (
  {
    type: LOAD_USER,
    payload: projectsApi.loaduser(id)
  });

export const removeError = () => (
  {
    type: REMOVE_ERROR,
  });