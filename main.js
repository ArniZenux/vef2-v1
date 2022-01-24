const path = require('path');
const util = require('util');
const express = require('express');
const fs = require('fs');

const app = express();

const txt = require('./data/1.txt');

const hostname = '127.0.0.1';
const port = 3000;

const rfAsync = util.promisify(fs.readFile);

function fannEkki(){
  return `
    <!doctype html>
    <html lang="is">
      <head>
        <meta charset="utf-8">
        <title>Vefforritun II - verkefni 1</title>
        <link rel="stylesheet" href="styles.css" />
      </head>

      <body>
      <div class="wrapper">
        <header">
          <h1>Fannst ekki</h1>
        </header>
          </div>
      </body>
    </html>
  `;
}

function Villa(){
  return `
    <!doctype html>
    <html lang="is">
      <head>
        <meta charset="utf-8">
        <title>Vefforritun II - verkefni 1</title>
        <link rel="stylesheet" href="styles.css" />
      </head>

      <body>
      <div class="wrapper">
        <header">
          <h1>Villa kom upp</h1>
        </header>
          </div>
      </body>
    </html>
  `;
}

function template(max, min) {
  return `
    <!doctype html>
    <html lang="is">
      <head>
        <meta charset="utf-8">
        <title>Vefforritun II - verkefni 1</title>
        <link rel="stylesheet" href="styles.css" />
      </head>

      <body>
      <div class="wrapper">
        <header">
          <h1>Gagnavinnsla</h1>
        </header>

        <main>
           <div class="categories">
          <section>
            <h2><span>1.txt</span></h2>
            <ul>
              <li>
                <h3>Max: ${max}</h3>
              </li>
              <li>
                <h3>Min: ${min}</h3>
              </li>
            </ul>
          </section>

          <section>
            <h2><span>2.txt</span></h2>
            <ul>
              <li>
                <h3>
                  <p>2</p>
                </h3>
            </ul>
          </section>

          <section>
            <h2><span>3.txt</span></h2>
            <ul>
              <li>
                <h3>
                  <p>3</p>
                </h3>
            </ul>
          </section>

          <section>
            <h2><span>4.txt</span></h2>
            <ul>
              <li>
                <h3>
                  <p>4</p>
                </h3>
              </li>
            </ul>
          </section>
        </div>
        </main>

      </div>
      </body>
    </html>
  `;
}


const max = 14; 
const min = 12; 
let = data = ''; 
  
async function readData(){
  try {
    data = await rfAsync('./data/1.txt', 'utf8');
  }
  catch (e) {
    console.error('error', e); 
  }
  console.log(data.toString('utf8'));
}

readData();

app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.send(template(data, min));
});

function notFoundHandler(req, res, next) { // eslint-disable-line
   res.send(fannEkki());
}

function errorHandler(err, req, res, next) { // eslint-disable-line
  res.send(Villa());
}

app.use(notFoundHandler);
app.use(errorHandler);

app.listen(port, hostname, () => {
  console.info(`Server running at http://${hostname}:${port}/`);
});