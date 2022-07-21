const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const path = require('path');
const session = require('express-session');
const passport = require('passport');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const db = require('./db');
const sessionStore = new SequelizeStore({ db });

//slightly more than minimal function to set up a basic server.
//comes with error handling out of the box
const createApp = () => {
  // body parsing middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  // auth and api routes
  app.use('/auth', require('./auth'));
  app.use('/api', require('./api'));

  // static file-serving middleware
  app.use(express.static(path.join(__dirname, '..', 'public')));

  // any remaining requests with an extension (.js, .css, etc.) send 404
  app.use((req, res, next) => {
    if (path.extname(req.path).length) {
      const err = new Error('Not found');
      err.status = 404;
      next(err);
    } else {
      next();
    }
  });

  // sends index.html. index.html is the entry point of the client side application. When it the browser hits the <script/> tag, that's when the webpack bundle is executed and the app loads.
  app.use('*', (req, res) => {
    const publicPath = path.join(__dirname, '..', 'public/index.html');
    res.sendFile(path.join(__dirname, '..', 'public/index.html'));
  });

  // error handling endware
  app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
  });
};
const syncDb = () => db.sync();
const startListening = () => {
  const server = app.listen(port, () => {
    console.log(`listening on port: ${port}`);
  });
};
startListening();
createApp();
