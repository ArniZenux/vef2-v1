import { mkdir, readdir, readFile, stat, writeFile } from 'fs/promises';
import { join } from 'path';
import { direxists } from './lib/file.js';
import { DataTemplate, makeHTML } from './make-html.js';
import { parse } from './parser.js';
import { dataFilename } from './lib/utils.js';

const DATA_DIR = './data';
const OUTPUT_DIR = './dist';

async function main() {
  console.log("readdir");
  const files = await readdir(DATA_DIR);

  if (!(await direxists(OUTPUT_DIR))) {
    await mkdir(OUTPUT_DIR);
  }

  const datas = [];

  for (const file of files) {
    const path = join(DATA_DIR, file);
    const info = await stat(path);

    if (info.isDirectory()) {
      // eslint-disable-next-line no-continue
      continue;
    }

    const data = await readFile(path);
    const str = data.toString('utf-8');

    const parsed = parse(str);
    const max = 34; 
    const min = 23; 
    const html = makeHTML(max, min); 
    const dataHtml = DataTemplate('Gagnavinnsla', html, true );
    const filename = dataFilename(OUTPUT_DIR);

    if(filename){
      await writeFile(`./dist/profa.html`, dataHtml, { flag: 'w+' });
    }
    else{
      console.warn('not working');
    }
  }
}

main().catch((err) => console.log(err)); 