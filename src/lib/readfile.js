const util = require("util");
const fs = require("fs");

const rfAsync = util.promisify(fs.readFile);

const txt = "./data/1.txt";

/*
async function lesFile(){
	try{
		
		data = await rfAsync(txt, 'utf8'); 
		
		array = data.toString().split('\n');			


	}	
	catch(e){
		console.log(e)
	}

*/

/*
function readData(){
	let data = fs.readFile(txt);

	return data; 
}

function splitData(){
	let data = readData(); 

	let array = data.toString().split('\n');

	return array; 
} 

function _max(){
	
	let array = splitData();
	let max = array[0];

	for(i in array){
		if(array[i] >= max){
			max = array[i];
		}
	}
	console.log(max); 

	return max; 
}

let max = _max();
//console.log(max); 
*/

/*
console.log('\n');
var min = array[0]; 
var max = array[0];
	
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
console.log(array.reduce(reducer)); 
*/

/*let sum = 0; 

for(let i = 0; i < array.length; i++){
		sum += parseInt(array[i], 10);
}*/
