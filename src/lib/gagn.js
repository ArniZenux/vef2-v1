const util = require("util");
const fs = require("fs");
const express = require("express");

const router = express.Router();

const readFileAsync = util.promisify(fs.readFile);

const txt = require("../data/1.txt");

function catchErrors(fn) {
  return (req, res, next) => fn(req, res, next).catch(next);
}

async function readData(req, res) {
  const data = await rfAsync(txt, "utf8");

  return data;
}

async function splitData(req, res, next) {
  const title = "Gagnavinnsla";

  const max = 34;
  const min = 12;

  /*const data = await readData();
  let array = data.toString().split('\n');      
  
  const max = array[0];
  const min = array[0];

  for(i in array){
    if(array[i] >= max){
      max = array[i];
    } 
  } 

  for(i in array){
    if(array[i] <= min){
      min = array[i];
    } 
  }*/

  return res.render("index", { title, max, min });
}

router.get("/", catchErrors(splitData));

module.exports = router;
