/*This file should hold all of the table set-up.
Supplement it with the fake data in SEED.JS */
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./database.sqlite');

function createArtist(){
	console.log("MIGRATION TABLE PRESENT!");
	db.run(
		"CREATE TABLE Artist (id INTEGER PRIMARY KEY NOT NULL,name TEXT NOT NULL ,date_of_birth TEXT NOT NULL, biography TEXT NOT NULL,is_currently_employed INTEGER DEFAULT 1)", 
		(error)=>console.log('oops 1...')
	);	
}

function createSeries(){
	db.run("CREATE TABLE Series (		id INTEGER PRIMARY KEY NOT NULL		,name TEXT NOT NULL, description TEXT NOT NULL)", (error)=>console.log('oops 2...')
	);
}

function createIssue(){
	db.run("CREATE TABLE Issue (		id INTEGER PRIMARY KEY NOT NULL		,name TEXT NOT NULL, issue_number TEXT NOT NULL, publication_date TEXT NOT NULL, artist_id INTEGER FOREIGN KEEEYYY NOT NULL, series_id INTEGER FOREIGN KEY NOT NULL)", 
		(error)=>console.log('oops 3...')
	);
}



module.exports = {createArtist}
//, createSeries, createIssue}
