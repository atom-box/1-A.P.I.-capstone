// Try making Evan Hahn's three kinds of middleware
// June 20,2018
const express = require('express');
const app = express();
let seconds;
let flag = false;

app.use( (req, res, next) =>{
	console.log('111');
	next();
} );

app.use( (req, res, next)=> {
 seconds = (new Date()).getSeconds();
 if ( !(seconds%2) ){flag = true;}
 console.log(`Flag set to ${flag} for #${seconds} because logic gives ${!(seconds%2)}`)
 if (flag){next();}else{res.end(`${seconds} is odd, stopped at 222.`)}
} );

app.use( (req, res) => {
	console.log('333');
	res.end(`${seconds} is even.  Made it to 333.`);
} );

app.listen(3456);
console.log('listening on 3456. OK.');