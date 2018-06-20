// Try making Evan Hahn's three kinds of middleware
// June 20,2018
const express = require('express');
app = express();


app.use( (req, res, next) =>{
	console.log('111');
	next();
} );

app.use( (req, res) => {
	console.log('222');
	res.end('I exist.');
} );

app.listen(3456);
console.log('listening on 3456. OK.');