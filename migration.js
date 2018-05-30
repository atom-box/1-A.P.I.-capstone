/*This file should hold all of the table set-up.
Supplement it with the fake data in SEED.JS */
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./database.sqlite');

function createArtist(){
	console.log("MIGRATION TABLE PRESENT!");
	db.run("CREATE TABLE Artist (		id INTEGER PRIMARY KEY NOT NULL		,name TEXT NOT NULL,date_of_birth TEXT NOT NULL, biography TEXT NOT NULL, is_currently_employed INTEGER DEFAULT 1)", (error)=>console.log("oops...")
	);
}

module.exports = {createArtist}
//, createSeries, createIssue}
