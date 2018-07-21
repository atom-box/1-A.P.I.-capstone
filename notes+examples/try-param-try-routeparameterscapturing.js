// an Express syntax snippet
// inspired by https://expressjs.com/en/guide/routing.html#route-parameters
// July 11, 2018
// Evan Genest @mistergenest


const express = require('express');
const api = express();
//const bodyParser = require("body-parser");

// https://expressjs.com/en/api.html#app.param 
// for syntax of PARAM!
//     DO    API.PARAM

var route1 = '/users/:userId/books/:bookId';
var route2 = '/cherry'
var flag = 9;
function incrFlag(cat){
	flag += cat;
	console.log(`Flag is: ${flag} `);
}

api.param(route2 , (req, res, next, val, name)=> {
	console.log(`Hi there mister${x}thing.`);
	console.log(`X is: ${x}` );	
	incrFlag("param-for-route2");
	next();
} );

api.get(route1, (req, res) => {
	incrFlag("route1")
	res.send(req.params);
} );

api.get('/', (req, res)=> {
	incrFlag("empty route");
	res.send(`Proper useage is: ${route1} `);
} );

const PORT = 3939;
api.listen(PORT, console.log(`Doin it to it in ${PORT} Usage is _${route1}_`) );

