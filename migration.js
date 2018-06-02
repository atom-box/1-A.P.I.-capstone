/*to do next-action 
Try running server.js.  For some reason, all three errors fire and then ALL THREE 'ALL IS WELL' messages fire!  Could be worse...

Help is in notes, circa line 527 Drop table .*/


/*This file should hold all of the table set-up.
Supplement it with the fake data in SEED.JS */
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./database.sqlite');

function createArtist(){
	db.run("DROP TABLE IF EXISTS Artist",
	function(e){
		if(e){
			console.log(`Problem, sir:${e}`);
		}
		else {
			console.log(`All is well in 1a.`);
		}
	}
	);
	db.run(
		"CREATE TABLE Artist (id INTEGER PRIMARY KEY NOT NULL,name TEXT NOT NULL ,date_of_birth TEXT NOT NULL, biography TEXT NOT NULL,is_currently_employed INTEGER DEFAULT 1)", 
		error=>{if(error) {console.log(`oops 1...${error}`)
		} else {
			console.log("All well in 1b.")
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
			console.log(`All well on line 37.`);
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
	console.log(`You should see this first.`);

		db.run(`DROP TABLE IF EXISTS Issue;`,
	function(e){
		if(e){
			console.log(`bad table-drop 2nd...${error}`);
		}
		else {
			console.log(`good table-drop 2nd.`);
		}
	}
	);
	console.log(`You should see this third.`);
	db.run(`CREATE TABLE IF NOT EXISTS Issue (
		id INTEGER PRIMARY KEY NOT NULL, 
		name TEXT NOT NULL, 
		issue_number TEXT NOT NULL, 
		publication_date TEXT NOT NULL, 
		artist_id INTEGER NOT NULL, series_id INTEGER  NOT NULL
		);`, 
		 error => {if(error){
			console.log(`bad table-create 4th...${error}`);
			} else {
			console.log(`good table-create 4th`);
			}


		});
}


module.exports = {createArtist, createSeries, createIssue}
