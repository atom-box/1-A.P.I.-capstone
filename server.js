// created by me, 100%
// This is the main javascript that calls all else

const express = require('express');
const logger = require('morgan');
const app = express();
const PORT = process.env.PORT || 4000;
const {createArtist, createSeries, createIssue} = require('./migration.js');
app.listen(PORT);
app.use(logger('tiny'));
console.log(`server.js is listening.  On port number _${PORT}_`);

createArtist();
createSeries();
createIssue();
// concern: will these reinvent the db every single time a request comes in?  
// not sure how these were hidden in Olympic.

const path = require('path');
const staticPath = path.resolve(__dirname, 'static');
// so folders found on Windows systems

app.get('/', (req, res)=>{
	res.status(200).end("Coming soon, a proper back end to COMIC.");
} );