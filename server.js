// created by me, 100%
// This is the main javascript that calls all else

/*


THIS    CURRENTLY    CRASHES,   INSTEAD OF FINDING      API ROUTE
THURSDAY MORNING I FOUND OUT THAT SECOND PART OF LINE 24 is currently an object but is supposed to be a function. 
But did other people do like this?


Next action may be to find Hahn syntax for this.  Is mine in wrong order? Missing a 'USE - require ?'
*/
const express = require('express');
const app = express();
let sump = null;
sump = require(`./work/homeMadeErrorHandler.js`);
const logger = require('morgan');
//const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4000;
const router = require('./work/routes.js');
//app.use(bodyParser.json());
app.use(logger('tiny'));
//const todos = '/api';
//console.log(`Typeof ROUTES is ${router} `);
app.use('/api', router);
app.get('/', (req, res)=>{
	res.status(200).send("All routes start with a.p.i. slash.");
}); 
app.use( function(req, res) {
	res.send("Get serious, Bro.");
	const jinx = new Error('Grrrr.')
	next(jinx);
});
//const x = (err, req, res, next) => {
//	console.error(err);
app.use(sump); 


app.listen(PORT);
console.log(`server.js is listening.  On port number _${PORT}_`);
module.exports = app;

