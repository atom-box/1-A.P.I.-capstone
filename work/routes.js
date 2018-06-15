const express = require('express');
const router = express();
const sqlite = require(`sqlite3`);
const db = new sqlite.Database(`./database.sqlite`);

router.get("/", (req, res)=>{
	res.status(200).end("Close; insufficient info.\t\t\t\tProper useage: /api/artists  or /api/series ");
} );

router.get(`/artists`, (req, res)=>{
	const outgoing = null;
	db.all(`SELECT * FROM Artist WHERE is_currently_employed is 1;`, (error, rows)=> {
		if (error){
			console.log(`In artists route -->${error}`);
			return null;
		}	else {
			outgoing = rows;			
		}	
	});
	res.status(200).json( {artists: outgoing} );
});


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