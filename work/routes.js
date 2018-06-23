const express = require('express');
const router = express();
const sqlite = require(`sqlite3`);
const db = new sqlite.Database(process.env.TEST_DATABASE || './database.sqlite');

router.get("/fink", (req, res, next)=>{
	res.status(409);
  const fink = new Error(`Fink spotted.  You entered a "test error"!! `);
  next(fink);
}); // end bad get for root get request

router.get(`/artists`, (req, res, next)=>{
	//let rows = null;
	db.all(`SELECT * FROM Artist WHERE Artist.is_currently_employed = 1;`, (err, artists)=> {
		if (err){
			next(`In artists route -->${err}`);
		}	
    res.status(200).json( {"artists": artists} );
	});
});

router.post('/artists',(req, res, next) => {

  const i = req.body.artist.id, 
    name = req.body.artist.name, 
    dob = req.body.artist.dateOfBirth, 
    bio = req.body.artist.biography , 
    employed = req.body.artist.is_currently_employed;

  if (!( i && name && dob && bio )){
    res.status(400); 
    // I hope these 2 lines satisfy the README; 'Returns a 400 response.'
    next(new Error `Some missing input in POST ARTISTS`); // hope this trickles out of the bottom of ROUTES.JS and finds the error-handling bottom of SERVER.JS
  } // end IF
  const query = `INSERT INTO Artist (id, name, date_of_birth, biography, is_currently_employed) VALUES ($i, $n, $dob, $b, $e);`; 
  db.put(query, {
    $i: i, 
    $n: name, 
    $dob: dob, 
    $b: bio , 
    $e: employed  }, 
    (err)=>{
      console.log(`Ham.  Swiss.  ${e}. `);
    if (err) {
      next(err);
      //console.error(e);
    }
  }); // end db.put
});   // end POST route




//my sole error handler is in main server.js.
// I am really counting on errors in ROUTES.JS to fall to the bottom here and drip on out to the bottom of SERVER.JS
module.exports = router;