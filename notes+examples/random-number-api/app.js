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

const http = require('http');
const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
// BODY PARSER PROBABLY NOT NEEDED; IT IS FOR FORM SUBMITS
const path = require("path");
path.resolve('__dirname', '../views');

const app = express();
app.set('view engine', 'ejs' );
app.use(morgan('dev'));
// WHAT IS DIFF BTWN SET AND USE?

app.get('/', (req, res, next)=> {
	res.render('short', function(e) {
		if (e) {
			next(e);
		}
	});
	});

function jinx (err, req, res, next) {
	console.log(`This just in: ${err}`);
}
app.use(jinx);


const PORT = 5445;
http.createServer(app).listen(
	PORT, console.log(`App is listening on port #${PORT}`)
	);

