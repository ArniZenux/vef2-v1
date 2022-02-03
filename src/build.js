import { mkdir, readdir, readFile, stat, writeFile } from 'fs/promises';
import { join } from 'path';
import { direxists } from './lib/file.js';
import { create, all } from 'mathjs';
import { make_HtmlTemplate, make_resultHTML, make_HtmlIndex, makeIndex } from './make-html.js';
import { parse } from './parser.js';
import { dataFilename } from './lib/utils.js';

const DATA_DIR = './data';
const OUTPUT_DIR = './dist';

function onlyNumbers(str) {
  return /^[0-9]+$/.test(str);
}

async function main() {
  const config = {
    matrix: "Array",
  };

  const math = create(all, config);

  const files = await readdir(DATA_DIR);

  if (!(await direxists(OUTPUT_DIR))) {
    await mkdir(OUTPUT_DIR);
  }

  const datas = [];

  let max = 0;
  let min = 0;
  let mid = 0;
  let summa = 0;
  let std = 0;
  let varin = 0;
  let medaltal = 0;

  for (const file of files) {
    const path = join(DATA_DIR, file);
    //console.log(file);

    let filename = file.split(".txt")[0];
    
    const data = await readFile(path);
    const str = data.toString("utf-8");
    const arr = str.split('\n').map((item) => {
      if (item.includes('.')) item = item.replace('.', '');
      if (item.includes(',')) item = item.replace(',', '.');
      if (item === '') return NaN;
      return Number(item);
      });

    const newArray = arr.filter((value) => !Number.isNaN(value));

    const numObj = { name: file, data: newArray };
    
    //console.log('obj -> ',path,' -> ',arr)

    console.log(newArray);

    /*let array = data.toString("utf-8").split("\n");
    //console.log(array);

    if (onlyNumbers(str)) {
      console.log("False: " + array);
    } else {
      console.log("tbaab");
      console.log("True :" + array.toString("utf-8"));
    }
    //console.log(onlyNumbers(array));
    //let parsed = parse(str);
    */
    
    
    //  https://github.com/ofurtumi/veff-2-v1

    max = math.max(newArray);
    min = math.min(newArray);
    mid = math.median(newArray);
    std = math.std(newArray);
    summa = math.sum(newArray);
    medaltal = math.mean(newArray);
    varin = math.variance(newArray);
    console.log("------------");
    console.log("Max: " + max);
    console.log("Min: " + min);
    console.log(`Sum: ${summa}`);
    console.log(`Medaltal: ${medaltal}`);
    console.log(`Miðgildi: ${mid}`);
    console.log(`Staðalfrávik : ${std}`);
    console.log(`Frávik : ${varin}`);

    /*
    const html = make_resultHTML(max, min, varin, medaltal, mid, std, summa, 0);
    const dataHtml = make_HtmlTemplate("Gagnavinnsla", filename, html, true);

    await writeFile(join(OUTPUT_DIR, `${filename}.html`), dataHtml, {
      flag: "w+",
    });

    datas.push(filename);
    //console.log(datas);

    const index = make_HtmlIndex("Gagnavinnsla", makeIndex(datas), false);
    await writeFile(join(OUTPUT_DIR, "index.html"), index, { flag: "w+" });

    max = 0;
    min = 0;
    mid = 0;
    summa = 0;
    std = 0;
    varin = 0;
    medaltal = 0;
    */
  
    //copyFile('src/styles.css', './dist/styles.css');
  
  }
}

main().catch((err) => console.log(err));
