import { mkdir, readdir, readFile, copyFile, writeFile, stat } from 'fs/promises';
import { join } from 'path';
import { create, all } from 'mathjs';
import { makeTemplate, makeResult, makeIndex, makeList } from './make-html.js';

const DATA_DIR = './data';
const OUTPUT_DIR = './dist';

async function direxists(dir) {
  try {
    const info = await stat(dir);
    return info.isDirectory();
  } catch (e) {
    return false;
  }
}

async function main() {
  const files = await readdir(DATA_DIR);

  if (!(await direxists(OUTPUT_DIR))) {
    await mkdir(OUTPUT_DIR);
  }

  const config = {
    matrix: 'Array',
  };

  const math = create(all, config);

  const datas = [];

  for (const file of files) {
    const path = join(DATA_DIR, file);

    const filename = file.split('.txt')[0];
    
    const data = await readFile(path);
    const str = data.toString('utf-8');
    const arr = str.split('\n').map((item) => {
      if (item.includes('.')) item = item.replace('.', '');
      if (item.includes(',')) item = item.replace(',', '.');
      if (item === '') return NaN;
      return Number(item);
    });

    const newArray = arr.filter((value) => !Number.isNaN(value));
    
    if( newArray.length === 0 ){
      const createResult = 'Gögn er ekki til';
      const createDataHtml = makeTemplate('Gagnavinnsla', filename, createResult, true);

      await writeFile(join(OUTPUT_DIR, `${filename}.html`), createDataHtml, {
        flag: 'w+',
      });

      datas.push(filename);

      const index = makeIndex('Gagnavinnsla', makeList(datas));
      await writeFile(join(OUTPUT_DIR, 'index.html'), index, { flag: 'w+' });
      
      copyFile('src/styles.css', './dist/styles.css'); 
    }

    else{
      const max = math.max(newArray);
      const min = math.min(newArray);
      const mid = math.median(newArray);
      const std = math.std(newArray);
      const summa = math.sum(newArray);
      const medaltal = math.mean(newArray);
      const varin = math.variance(newArray);
      const range = max - min; 
     
      const createResult = makeResult(max, min, varin, medaltal, mid, std, summa, range);
      const createDataHtml = makeTemplate('Gagnavinnsla', filename, createResult, true);

      await writeFile(join(OUTPUT_DIR, `${filename}.html`), createDataHtml, {
        flag: 'w+',
      });

      datas.push(filename);

      const index = makeIndex('Gagnavinnsla', makeList(datas));
      await writeFile(join(OUTPUT_DIR, 'index.html'), index, { flag: 'w+' });
      
      copyFile('src/styles.css', './dist/styles.css'); 
    }
  }
}

main().catch((err) => console.log(err));
