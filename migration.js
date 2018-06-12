/*dev diary, June 12, 2018:
I feel deceived.   I wasted days of my time trying to call 'migration.js', made me consider quitting this career.
Turns out their secret parts call it from within the depths of their testing.  
When doing #codeacedemy, look at the solutions EARLY ON.
*/

/*This doesn't need to export.  This just needs to create a db, call db.foo and db.bar via SERIALIZE.  And then stop cold, no export. */
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./database.sqlite');


db.serialize(()=>{


	db.run(
		`CREATE TABLE Artist (id INTEGER PRIMARY KEY NOT NULL,
		name TEXT NOT NULL ,
		date_of_birth TEXT NOT NULL, biography TEXT NOT NULL,
		is_currently_employed INTEGER DEFAULT 1)`, 
		error=>{if(error) {console.log(`bad artist table create...${error}`)
		} else {
			console.log("good artisttable create")
		}
	});



	db.run(`CREATE TABLE IF NOT EXISTS Series (		
		id INTEGER PRIMARY KEY NOT NULL,
		name TEXT NOT NULL, 
		description TEXT NOT NULL);`, 
		function(error){
			if (error){
				console.log(`bad seriestable create...${error}`)
			} else {
				console.log('good series-create.')
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
		 error => {
		 	if(error){
				console.log(`bad issuetable-create ...${error}`);
			} else {
				console.log(`good issue-create 4th`);
			}


		}
	);


	}); // end serialize


