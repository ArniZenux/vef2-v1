const util = require('util');
const fs = require('fs');

const rfAsync = util.promisify(fs.readFile);

const txt = './data/1.txt';

async function readData(){
	const data = await rfAsync(txt, 'utf8'); 

	return data; 
}

async function splitData(){
	
	let max, min; 

	const data = await readData();
	let array = data.toString().split('\n');			
	
	max = array[0];
	min = array[0];

	for(i in array){
		if(array[i] >= max){
			max = array[i];
		}	
	}	

	for(i in array){
		if(array[i] <= min){
			min = array[i];
		}	
	}

	console.log('Max: ' + max);
	console.log('Min: ' + min);

	
}

splitData();
