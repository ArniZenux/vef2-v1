import { readdir } from 'fs/promises';
import express from 'express';

const DATA_DIR = './data';

const app = express();

const hostname = '127.0.0.1';
const port = 3000;

app.get('/', async (req, res) =>{

  const files = await readdir(DATA_DIR); 

  res.send(
    `hello world. Files are . ${files.join(
      ', '
    )}`
  );
});

app.listen(port, hostname, () => {
  console.info(`Server running at http://${hostname}:${port}/`);
});