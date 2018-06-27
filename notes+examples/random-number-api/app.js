// random-number-api/app.js
// 
// June 24, 2018 @mistergenest

// after Evan Hahn

/* My idea is to do a weird iron 
chef with the following ingredients:
1) use as many notes from p. 146 notes as possible
1) CSS from various sources.  Frankenstein it from Wes Bos?
2) server it via EJS
3) Base it on the Robot Wisdom page?
4) Add their API thing? 
*/

// code/calender/hahn2/js/app.js   works for TROY but not 404.  okay to use as a guide

const http = require('http');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const ejs = require('ejs');
// BODY PARSER PROBABLY NOT NEEDED; IT IS FOR FORM SUBMITS
const path = require("path");
//path.resolve('__dirname', './viewz');
// BASED ON HAHN2, JUST WANT ONE DOT HERE.

const app = express();
app.set('view engine', 'ejs' );
app.use(morgan('dev'));
// WHAT IS DIFF BTWN SET AND USE?

app.get('/', (req, res, next)=> {
	res.render('header', function(e) {
		if (e) {
			next(e);
		}
	});
});

function jinx (err, req, res, next) {
	console.log(`This just in: ${err}`);
}
app.use(jinx);


const PORT = 5432;
http.createServer(app).listen(
	PORT, console.log(`App is listening on port #${PORT}`)
	);

