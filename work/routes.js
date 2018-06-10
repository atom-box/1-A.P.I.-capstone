const express = require('express');
const app = express();

app.get('/', (req, res)=>{
	res.status(200).end("Coming soon, a proper back end to COMIC.");
} );
app.get(`/api/artists`, (req, res)=>{
	const curr_empl_artists = helper.getArtists();

	// const curr_empl_artists = getArtists();
	const outgoing = curr_empl_artists.toString();
	res.status(200).end(outgoing);
	});

