const path = require('path');
const express = require('express');

const app = express();

const efni = require('./efni');

const hostname = '127.0.0.1';
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', efni);

function notFoundHandler(req, res, next) { // eslint-disable-line
  const title = 'Fannst ekki';
  const message = 'Ó nei, efnið finnst ekki!';
  res.status(404).render('error', { title, message });
}

function errorHandler(err, req, res, next) { // eslint-disable-line
  console.error(err);
  const title = 'Villa kom upp';
  const message = '';
  res.status(500).render('error', { title, message });
}

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(port, hostname, () => {
  console.info(`Server running at http://${hostname}:${port}/`);
});