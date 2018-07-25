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

let PORT = 2055;

var http = require('http');
var postHTML = 
  '<html><head><title>Post Example</title></head>' +
  '<body>' +
  '<form method="post">' +
  'Input 1: <input name="input1"><br>' +
  'Input 2: <input name="input2"><br>' +
  '<input type="submit">' +
  '</form>' +
  '</body></html>';

http.createServer((req, res)=>{
	console.log(`An event listener from line 42 MIGHT be listening near localhost:${PORT}`);
	res.end('oogity boogity.');
} ).listen(PORT);

/*
	https://docs.nodejitsu.com/articles/HTTP/servers/how-to-read-POST-data/
*/




PORT = 1111;
const express = require(`express`);
const app = express();
const route0 = `/`;
let organism1 = `{"kingdom": "plant", "name": "daisy" }`;
let organism2 = ``;

const noun0 = `sauce`;
app.get(route0, (req, res)=>{
	res.end(`${noun0}, no ${noun0}...`);
} );
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

let func1 = function(alpha) {
	arguments.callee === func1;
	arguments[0] === alpha;
	arguments[1] === 2;
	arguments.length === 3;
};
func1(1, 2, 3);

/*
	https://docs.nodejitsu.com/articles/javascript-conventions/what-is-the-arguments-object/
*/