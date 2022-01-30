const path = require('path');
const util = require('util');
const express = require('express');
const gagn = require('./gagn');

const app = express();

const hostname = '127.0.0.1';
const port = 3000;

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', gagn);

function notFoundHandler(req, res, next) { // eslint-disable-line
    const title = 'Fannst ekki';
    res.status(404).render('error', { title });
}

function errorHandler(err, req, res, next) { // eslint-disable-line
    const title = 'Villa kom upp';
    res.status(500).render('error', { title });
}

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(port, hostname, () => {
  console.info(`Server running at http://${hostname}:${port}/`);
});