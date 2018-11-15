import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import express from 'express';
import renderFullPage from './renderFullPage';
import { Provider } from 'react-redux';
import App from '../../../frontend/components/app/App';
import store from './../../../frontend/store/store';

const router = express.Router();

export default router

  .get('/', (req, res) => {
    const context = {};
    let obj = { info: renderToString(
      <Provider store={store}>
        <StaticRouter context={context} location={req.url}>
          <App/>
        </StaticRouter>
      </Provider>
    ) };
    console.log(obj.info);
    res.send(renderFullPage(obj));
  })

  .get('/test', (req, res) => {
    const html = renderToString(
      <StaticRouter>
        <App/>
      </StaticRouter>
    );
    res.json(renderFullPage(html));
  });

  // TEMPLATE PARAMETERS