import { renderToString } from 'react-dom/server';
import React from 'react';
import { /*matchPath,*/StaticRouter } from 'react-router-dom';

// import auth from './auth';
// import users from './users';
import loadUser from '../../../frontend/services/api';
import renderFullPage from './renderFullPage';
import App from '../app';

export default function router(req, res) {
  // const matchAuth = auth.reduce((acc, route) => matchPath(req.url, { path: route, exact: true }) || acc, null);
  // const matchUser = user.reduce((acc, route) => matchPath(req.url, { path: route, exact: true }) || acc, null);

  // if(!match) {
  //   res.status(404).send('page not found');
  //   return;
  // }

  const id = null;

  return loadUser(id)
    .then(resp => {
      
      // const pokemon = { list: resp.data.pokemon };
      console.log(resp);

      const context = {};

      const html = renderToString(
        <StaticRouter context={context} location={req.url}>
          <App/>
        </StaticRouter>
      );

      res.status(200).send(renderFullPage(html));
    })
    .catch(err => res.status(404).send(`${err}: ERRERRRORERERROR`));
}