const util = require('util');
const fs = require('fs');

const rfAsync = util.promisify(fs.readFile);

const readStream = fs.createReadStream('./data/1.txt');

const num = [13,14,5,6,7,30];

const chunks = [];

async function readTxt(){
	let file = '';
	try{
		file = await rfAsync('./data/1.txt', 'utf8');
	}
	catch(e){
		console.log(e)
	}
     
	chunks.push(file)
    //var max = Math.max(file); 
    //console.log(max);
	//var max = Math.max(file); 
	//console.log(max.toString('utf8')); 
	//console.log(file);
}

readStream.on('data', (chunk) =>{
	console.log('chunk');
	chunks.push(chunk);
});

readStream.on('close', () => {
	console.log(`file read ${chunks.length} chunks`);
});


fs.readFile('./data/1.txt', function(err, data) {
	if(err) throw err; 
	
	let array = data.toString().split("\n");
	
	for(i in array){
		console.log(array[i]);
	}
	
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
	
	const reducer = (accumulator, curr) => accumulator + curr;

	console.log('Max: ' + max);
	console.log('Min: ' + min); 
	console.log(array.reduce(reducer)); 
	//console.log(Math.mean(array));
	
	console.log(array[1]); 

	let sum = 0; 
	for(let i = 0; i < array.length; i++){
		sum += parseInt(array[i], 10);
	}
	let avg = sum / 4; 
	console.log(`${sum}`); 
	console.log(avg); 
});


//readTxt();
//console.log(chunks);
//const max = Math.max.apply(num); 
//console.log(num);
//console.log(max);  