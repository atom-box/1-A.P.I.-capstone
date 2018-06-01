/*to do next-action circa line 527 Drop table if exist language is in SQL-notes.  THEN if neccessary make the table droppable -- maybe that is only from some other POSTGRES or something...*/


/*This file should hold all of the table set-up.
Supplement it with the fake data in SEED.JS */
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./database.sqlite');

function createArtist(){
	console.log("MIGRATION TABLE PRESENT!");
	db.run("DROP TABLE IF EXISTS Artist",
	function(e){
		if(e){
			console.log(`Problem, sir:${e}`);
		}
		else {
			console.log(`All is well on line 17.`);
		}
	}
	);
	db.run(
		"CREATE TABLE Artist (id INTEGER PRIMARY KEY NOT NULL,name TEXT NOT NULL ,date_of_birth TEXT NOT NULL, biography TEXT NOT NULL,is_currently_employed INTEGER DEFAULT 1)", 
		error=>{if(error) {console.log('oops 1...')
		} else {
			console.log("Nothing wrong in 1.")
		}
	})
};

function createSeries(){
		db.run("DROP TABLE IF EXISTS Series",
	function(e){
		if(e){
			console.log(`Problem, sir:${e}`);
		}
		else {
			console.log(`All is well on line 37.`);
		}
	}
	);

	db.run("CREATE TABLE Series (		id INTEGER PRIMARY KEY NOT NULL		,name TEXT NOT NULL, description TEXT NOT NULL)", 
		function(error){
			if (error){
				console.log(`oops 2...${error}`)
			} else {
				console.log('2 worked.  with old-style curlies')
			}
	});
}

function createIssue(){
		db.run("DROP TABLE IF EXISTS Issue",
	function(e){
		if(e){
			console.log(`Problem, sir:${e}`);
		}
		else {
			console.log(`All is well on line 59.`);
		}
	}
	);

	db.run("CREATE TABLE Issue (		id INTEGER PRIMARY KEY NOT NULL		,name TEXT NOT NULL, issue_number TEXT NOT NULL, publication_date TEXT NOT NULL, artist_id INTEGER FOREIGN KEEEYYY NOT NULL, series_id INTEGER FOREIGN KEY NOT NULL)", 
		(error)=>console.log('oops 3...')
	);
}


module.exports = {createArtist, createSeries, createIssue}
