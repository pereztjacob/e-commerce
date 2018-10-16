const URL = '/api';
const AUTH_URL = `${URL}/auth`;

const headers = {
  'content-type': 'application/json',
};

function signup(user) {
  return fetch(`${AUTH_URL}/signup`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers
  }).then(r => r.json());
}

function signin(user) {
  return fetch(`${AUTH_URL}/signin`, {
    method: 'POST',
    body: JSON.stringify(user),
    headers
  }).then(r => r.json());
}

function addtocart(cart, id) {

  loaduser(id._id).then(body => console.log(body.cart));

  return fetch(`${URL}/users/${id._id}/cart`, {
    method: 'PUT',
    body: JSON.stringify({
      cart: cart
    }),
    headers
  }).then(r => r.json());
}

function loaduser(id) {
  return fetch(`${URL}/users/${id}`, {
    method: 'GET',
    headers
  }).then(r => r.json());
}

export default {
  signup,
  signin,
  loaduser,
  addtocart
};