const express = require('express');
const router = express();
const sqlite = require(`sqlite3`);
const db = new sqlite.Database(process.env.TEST_DATABASE || './database.sqlite');

router.get("/", (req, res, next)=>{
	res.status(200).end("Close; insufficient info.\t\t\t\tProper useage: /api/artists  or /api/series ");
} );

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
    next(new Error `Some missing input in POST ARTISTS`); // hope this trickles out of the bottom of ROUTES.JS and finds the error-handling bottom of SERVER.JS
  }
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
  } );
} );

//my especially useless error handler is in main server.js.


/*helper.getArtists = () => {
  const results = {};
  db.all("SELECT nam FROM Artist WHERE is_currently_employed IS 1  ", 
    function(e, rows){
      if(e){
        console.log(e);
      }else{
        console.log('no-prob')
      }
      results = rows; // TO DO !!!!
    } );
  //res.artists = r e s u l t
  return results;
 };      */



	// const curr_empl_artists = getArtists();

module.exports = router;