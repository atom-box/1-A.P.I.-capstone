// created by me, 100%
// This is the main javascript that calls all else

const express = require('express');
const logger = require('morgan');
const app = express();
const PORT = process.env.PORT || 4000;
const setUp = require('./migration.js');
const addKirbyAndLee = require('./seed.js');
const helper = require('./work/tools.js');
app.listen(PORT);
app.use(logger('tiny'));
console.log(`server.js is listening.  On port number _${PORT}_`);

console.log('This is right before the 3 functions of MIGRATION.');



setUp.createArtist();
setUp.createSeries();
setUp.createIssue();



//addKirbyAndLee();
console.log('This is right after the 3 + 1 functions of MIGRATION.');


// fillTables();
// concern: will these reinvent the db every single time a request comes in?  
// not sure how these were hidden in Olympic.

const path = require('path');
const staticPath = path.resolve(__dirname, 'static');
// so folders found on Windows systems

app.get('/', (req, res)=>{
	res.status(200).end("Coming soon, a proper back end to COMIC.");
} );
app.get(`/api/artists`, (req, res)=>{
	const curr_empl_artists = helper.getArtists();

	// const curr_empl_artists = getArtists();
	const outgoing = curr_empl_artists.toString();
	res.status(200).end(outgoing);
	});


