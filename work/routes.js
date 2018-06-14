const express = require('express');
const router = express();

router.get('/', (req, res)=>{
	res.status(200).end("Coming soon, a proper back end to COMIC.");
} );

router.get('/api', (req, res)=>{
	res.status(200).end("Try again.\nProper useage: /api/artists  or /api/series ");
} );



router.get(`/api/artists`, (req, res)=>{
	const curr_empl_artists = helper.getArtists();

	// const curr_empl_artists = getArtists();
	const outgoing = curr_empl_artists.toString();
	res.status(200).end(outgoing);
	});

module.exports = router;