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

const logger = require('morgan');
//const bodyParser = require('body-parser');
const PORT = process.env.PORT || 4000;
const router = require('./work/routes.js');
//app.use(bodyParser.json());
app.use(logger('tiny'));
//const todos = '/api';
console.log(`Typeof ROUTES is ${router} `);
app.use('/api' , router );
// Crashing here!  Look in Hahn for syntax.
app.listen(PORT);


console.log(`server.js is listening.  On port number _${PORT}_`);



//const path = require('path');
//const staticPath = path.resolve(__dirname, 'static');

//app.get('/', (req, res)=>{
//	res.status(200).end("Coming soon, a proper back end to COMIC.");
//} );



