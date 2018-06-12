/*dev diary, June 12, 2018:
I feel deceived.   I wasted days of my time trying to call 'migration.js', made me consider quitting this career.
Turns out their secret parts call it from within the depths of their testing.  
When doing #codeacedemy, look at the solutions EARLY ON.
*/

/*This doesn't need to export.  This just needs to create a db, call db.foo and db.bar via SERIALIZE.  And then stop cold, no export. */
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./database.sqlite');
const setUp = {};
setUp.purpose = "The helper object holds methods and tools for the COMICBOOK server.  Its complement is the ROUTES file, which holds the routing logic.";

setUp.createArtist = function(){
	db.serialize(()=>{

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
		`CREATE TABLE Artist (id INTEGER PRIMARY KEY NOT NULL,
		name TEXT NOT NULL ,
		date_of_birth TEXT NOT NULL, biography TEXT NOT NULL,
		is_currently_employed INTEGER DEFAULT 1)`, 
		error=>{if(error) {console.log(`bad artist 2...${error}`)
		} else {
			console.log("good artist 2")
		}
	})}) // end serialize
};

setUp.createSeries = function(){
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
	db.run(`CREATE TABLE IF NOT EXISTS Series (		
		id INTEGER PRIMARY KEY NOT NULL,
		name TEXT NOT NULL, 
		description TEXT NOT NULL);`, 
		function(error){
			if (error){
				console.log(`bad SERIES2...${error}`)
			} else {
				console.log('GOOD SERIES2.')
			}
	});
}

setUp.createIssue = function (){
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
		artist_id INTEGER NOT NULL, 
		series_id INTEGER NOT NULL,  
		FOREIGN KEY (series_id) REFERENCES Series(id) );`, 
		 error => {if(error){
			console.log(`bad table-create 4th...${error}`);
			} else {
			console.log(`good table-create 4th`);
			}


		});
}


module.exports = setUp;
