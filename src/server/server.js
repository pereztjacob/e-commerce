/* eslint no-console: off */
const http = require('http');
//const app = require('./lib/app');
import app from "./lib/app";
const connect = require('./lib/connect');

const PORT = process.env.PORT || 3000;

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/auth-api';

connect(MONGODB_URI);

let currentApp = app;

const server = http.createServer(currentApp);

if(module.hot) {
  module.hot.accept("./lib/app", () => {
    server.removeListener("request", currentApp);
    console.log(currentApp === app);
    currentApp = app;
    console.log(currentApp === app);
    
    server.on("request", currentApp);

  });
}

server.listen(PORT, () => {
  console.log('server running on', server.address().port);
});