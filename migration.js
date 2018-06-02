/*to do next-action 
Remember -
to - - 
restore FOREIGN KEY to the last two columns on SERIES !  
Ate a 7 layer bar circa 3:20pm
*/

/*This file should hold all of the table set-up.
Supplement it with the fake data in SEED.JS */
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./database.sqlite');

function createArtist(){
	db.run(`DROP TABLE IF EXISTS Artist;`,
	function(e){
		if(e){
			console.log(`artist bad 1:${e}`);
		}
		else {
			console.log(`ARTIST good 1.`);
		}
	}
	);
	db.run(
		`CREATE TABLE IF NOT EXISTS Artist (id INTEGER PRIMARY KEY NOT NULL,name TEXT NOT NULL ,date_of_birth TEXT NOT NULL, biography TEXT NOT NULL,is_currently_employed INTEGER DEFAULT 1)`, 
		error=>{if(error) {console.log(`bad artist 2...${error}`)
		} else {
			console.log("good artist 2")
		}
	})
};

function createSeries(){
		db.run("DROP TABLE IF EXISTS Series",
	function(e){
		if(e){
			console.log(`BAD SERIES1:${e}`);
		}
		else {
			console.log(`GOOD SERIES1.`);
		}
	}
	);
	db.run(`CREATE TABLE IF NOT EXISTS Series (		id INTEGER PRIMARY KEY NOT NULL,
		name TEXT NOT NULL, description TEXT NOT NULL);`, 
		function(error){
			if (error){
				console.log(`bad SERIES2...${error}`)
			} else {
				console.log('GOOD SERIES2.')
			}
	});
}

function createIssue(){
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
	db.run(`CREATE TABLE IF NOT EXISTS Issue (
		id INTEGER PRIMARY KEY NOT NULL, 
		name TEXT NOT NULL, 
		issue_number TEXT NOT NULL, 
		publication_date TEXT NOT NULL, 
		artist_id INTEGER NOT NULL  , 
		series_id INTEGER  NOT NULL 
		);`, 
		 error => {if(error){
			console.log(`bad table-create 4th...${error}`);
			} else {
			console.log(`good table-create 4th`);
			}


		});
}


module.exports = {createArtist, createSeries, createIssue}
