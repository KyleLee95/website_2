const express = require('express');
const app = express();
const port = process.env.PORT || 8080;
const path = require('path');
//need to export app so that mocha can pick it up
module.exports = app;
// This is a global Mocha hook, used for resource cleanup.
// Otherwise, Mocha v4+ never quits after tests.

if (process.env.NODE_ENV !== 'production') require('../secrets');

//slightly more than minimal function to set up a basic server.
//comes with error handling out of the box
const createApp = () => {
  // body parsing middleware
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  //api routes
  app.use('/api', require('./api'));

  // static file-serving middleware
  app.use(express.static(path.join(__dirname, '..', 'public')));

  // sends index.html. index.html is the entry point of the client side application. When it the browser hits the <script/> tag, that's when the webpack bundle is executed and the app loads.
  app.use('*', (req, res) => {
    const publicPath = path.join(__dirname, '..', 'public/index.html');
    res.sendFile(path.join(__dirname, '..', 'public/index.html'));
  });
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

  // error handling endware
  app.use((err, req, res, next) => {
    console.error(err);
    console.error(err.stack);
    res.status(err.status || 500).send(err.message || 'Internal server error.');
  });
};

const startListening = () => {
  const server = app.listen(port, () => {
    console.log('\x1b[36m%s\x1b[0m', `LISTENING ON PORT: ${port}`);
  });
};

async function bootApp() {
  await createApp();
  await startListening();
}

if (require.main === module) {
  bootApp();
} else {
  createApp();
}
