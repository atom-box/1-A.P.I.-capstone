const express = require('express');
const router = express();
const sqlite = require(`sqlite3`);
const bodyParser = require("body-parser");
const db = new sqlite.Database(process.env.TEST_DATABASE || './database.sqlite');

router.get("/fink", (req, res, next)=>{
	res.status(409);
  const fink = new Error(`Fink spotted.  You entered a "test error"!! `);
  next(fink);
}); // end bad get for root get request

router.get(`/artists`, (req, res, next)=>{
	//let rows = null;
  let query = `SELECT * FROM Artist WHERE Artist.is_currently_employed = 1;`;
	db.all(query , (err, artists)=> {
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
  const values = {
    $i: i, 
    $n: name, 
    $dob: dob, 
    $b: bio , 
    $e: employed  
  };
  db.put(query, values, 
    (err, retrieval)=>{
    if (err) {
      next(err);
    } else {
      res.status(200).send({artist: retrieval})
    } // end IF ERR
  }); // end db.put
});   // end POST route//

router.get(`/artists/:thing`, (req, res, next)=>{
  let query = `o o o ;`;
  db.get(query, (err)=>{next("Oxford comma.")} );
});

router.put( `/artists/:id` ,(req, res, next)=>{
  const msg = ``;
  msg =`Gonna put PRE&C into artist --${req.params.id}-- `;
  console.log(msg);
  next('No route here yet in ARTIST-id PUT.');
} );

router.delete( `/artists/:id`, (req, res, next)=>{


  // CH AN GE WORKING TO FALSE .
  let msg = `UPDATE Artist SET is_currently_employed = 0 WHERE Artist.id ` ;
  console.log(msg);
  db.run(msg, (err)=>{
    if (err){
      next(err);
    }else{
      msg = `SELECT FROM Artist WHERE Artist.id = ${id}`;
      db.get(msg, (err, artist)=> {
        res.status(200).json({ artist: artist });
      } );
    }
  } );

  next('Missing WORK=0 statement in artist delete.');
} );

router.get('/series/',(req, res, next)=>{
  res.series = ` to       do    john   deere `;
  const msg = `Here are many series ${'foo'} `;
  next("there's no rout here");
} );

router.post('/series', (req, res, next)=>{
  const newSeries = req.body.series;
  console.log(`Here is a new series about _${newSeries}_`);
  next('nuttin in Line 82 yet.')
} );

router.get('/series/:id', (req, res, next)=>{
  res.body.series = `nuttin here about SERIES _${id}_ yet`;
  res.status(200).send('nothing nothing nothing todo');
} );

router.put('/series/:id', (req, res, next)=>{
  const msg = `The plan is to put _${id}_ in there...`;
  res.status(200).send(msg);
} );

router.delete('/series/:id', (req, res, next)=>{
  next('No delete route yet for _${id}_');
  res.status(204).send('Burma-Shave!');
} );

router.get('/series/:id/issues/',(req, res, next)=>{
  let manyManyIssues = [];
  res.status(200).send('Some issues _${manyManyIssues}_ will be here.');
});

router.post('/series/:id/issues', (req, res, next)=>{
    let msg = req.body.issue;
    res.body.issue(msg);
    res.status(201).send();
});


router.put('/series/:id/issues/:id2', (req, res, next)=>{
  let msg = `Take this info ${req.body.issue}`;
  res.status(828).send();
} );

router.delete('/series/:id/issues/:id2', (req, res, next)=>{
  let msg = `I'm pooped.`;
  res.send(msg);
} );



/*
// don't trust any of the parsed parts. 


//my sole error handler is in main server.js.
// I am really counting on errors in ROUTES.JS to fall to the bottom here and drip on out to the bottom of SERVER.JS
module.exports = router;

// //  //  // //  //  //  // //  //  // //  //
          :::::::::::::::::
          :::::::::::::::::
          :::::::::::::::::
          :::::::::::::::::
          :::::::::::::::::
          :::::::::::::::::
          :::::::::::::::::


### Database Table Properties

* **Artist**
  - id - Integer, primary key, required
  - name - Text, required
  - date_of_birth - Text, required
  - biography - Text, required
  - is_currently_employed - Integer, defaults to `1`

* **Series**
  - id - Integer, primary key, required
  - name - Text, required
  - description - Text, required

* **Issue**
  - id - Integer, primary key, required
  - name - Text, required
  - issue_number - Text, required
  - publication_date - Text, required
  - artist_id - Integer, foreign key, required
  - series_id - Integer, foreign key, required


### Route Paths and Functionality

**api/artists**
- GET
  - Returns a 200 response containing all saved currently-employed artists (`is_currently_employed` is equal to `1`) on the `artists` property of the response body
- POST
  - Creates a new artist with the information from the `artist` property of the request body and saves it to the database. Returns a 201 response with the newly-created artist on the `artist` property of the response body
  - If any required fields are missing, returns a 400 response

**api/artists/:artistId**
- GET
  - Returns a 200 response containing the artist with the supplied artist ID on the `artist` property of the response body
  - If an artist with the supplied artist ID doesn't exist, returns a 404 response
- PUT 
  - Updates the artist 
  with the specified artist ID 
  using the information from 
  the `artist` property 
  of the request body 
  and saves it to the database. 
  Returns a 200 response 
  with the updated artist 
  on the `artist` property 
  of the response body

  - If any required fields are missing, returns a 400 response
  - If an artist with the supplied artist ID doesn't exist, returns a 404 response


- DELETE
  - Updates the artist with the specified artist ID to be unemployed (`is_currently_employed` equal to `0`). Returns a 200 response.
  - If an artist with the supplied artist ID doesn't exist, returns a 404 response

**api/series**
- GET
  - Returns a 200 response containing all saved series on the `series` property of the response body



- POST
  - Creates a new series with the information from the `series` property of the request body and saves it to the database. Returns a 201 response with the newly-created series on the `series` property of the response body
  - If any required fields are missing, returns a 400 response


**api/series/:seriesId**
- GET
  - Returns a 200 response containing the series with the supplied series ID on the `series` property of the response body
  - If a series with the supplied series ID doesn't exist, returns a 404 response
- PUT
  - Updates the series with the specified series ID using the information from the `series` property of the request body and saves it to the database. Returns a 200 response with the updated series on the `series` property of the response body
  - If any required fields are missing, returns a 400 response
  - If a series with the supplied series ID doesn't exist, returns a 404 response
- DELETE
  - Deletes the series with the supplied series ID from the database if that series has no related issues. Returns a 204 response.
  - If the series with the supplied series ID has related issues, returns a 400 response.
  - If a series with the supplied series ID doesn't exist, returns a 404 response



**api/series/:seriesId/issues**
- GET
  - Returns a 200 response containing all saved issues related to the series with the supplied series ID on the `issues` property of the response body
  - If a series with the supplied series ID doesn't exist, returns a 404 response
- POST
  - Creates a new issue, related to the series with the supplied series ID, with the information from the `issue` property of the request body and saves it to the database. Returns a 201 response with the newly-created issue on the `issue` property of the response body
  - If any required fields are missing or an artist with the supplied artist ID doesn't exist, returns a 400 response
  - If a series with the supplied series ID doesn't exist, returns a 404 response

**api/series/:seriesId/issues/:issueId**
- PUT
  - Updates the issue with the specified issue ID using the information from the `issue` property of the request body and saves it to the database. Returns a 200 response with the updated issue on the `issue` property of the response body
  - If any required fields are missing, returns a 400 response
  - If a series with the supplied series ID doesn't exist, returns a 404 response
  - If an issue with the supplied issue ID doesn't exist, returns a 404 response
- DELETE
  - Deletes the issue with the supplied issue ID from the database. Returns a 204 response.
  - If a series with the supplied series ID doesn't exist, returns a 404 response
  - If an issue with the supplied issue ID doesn't exist, returns a 404 response


          :::::::::::::::::
          :::::::::::::::::
          :::::::::::::::::
          :::::::::::::::::
          :::::::::::::::::
          :::::::::::::::::
          :::::::::::::::::

*/