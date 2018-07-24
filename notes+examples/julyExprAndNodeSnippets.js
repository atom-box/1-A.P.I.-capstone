let x = 5;
function myBlock(){
	x *=33;
}
myBlock();
console.log(`1111`);
console.log(x);

/*  
	Confirmed:
		Functions can alter things 
    outside of the block, even 
    though they weren't passed 
    into the block.
*/

let a;
(function(){
	let a = b = 7;
	})();
console.log(a); // UNDEFINED, b/c a is global
console.log(b); // 7, b/c b is global

/* https://www.sitepoint.com/5-typical-javascript-interview-exercises/
Gotcha for scope and declaring variables in JS.
*/

const express = require(`express`);
const app = express();
const route0 = `/`;
let organism1 = `{"kingdom": "plant", "name": "daisy" }`;
let organism2 = ``;

const noun0 = `sauce`;
app.get(route0, (req, res)=>{
	res.end(`${noun0}, no ${noun0}...`);
} );
const PORT = 2055;
app.listen(PORT, (req, res)=>{
	console.log(`Server is looking for ${noun0} on localhost: ${PORT}`);
} );

let count0 = organism2.indexOf('{');
let count1 = organism2.indexOf(',');
let count2 = organism2.indexOf('}');
console.log(`Indexes of curly, comma, closed-curly are: ${count0}, ${count1}, and ${count2}.`);
// Indexes will be -1 for missing chars.  
// This returns '-1, -1, -1'

if(organism2 && count0 > -1){
	let parts = JSON.parse(organism2);	
}

/*
	https://medium.com/@adamzerner/how-bodyparser-works-247897a93b90
	Dude explains middleware and then BODYPARSER for the req object
*/