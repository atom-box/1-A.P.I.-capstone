// an Express syntax snippet
// inspired by https://expressjs.com/en/guide/routing.html#route-parameters
// July 11, 2018
// Evan Genest @mistergenest


const express = require('express');
const api = express();
const bodyParser = require("body-parser");

// https://expressjs.com/en/api.html#app.param 
// for syntax of PARAM!
//     DO    API.PARAM

api.get('/users/:userId/books/:bookId', (req, res) => {
	res.send(req.params);
} );

const PORT = 3939;
api.listen(PORT, console.log(`Doin it to it in ${PORT}`) );

