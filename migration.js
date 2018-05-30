/*This file should hold all of the table set-up.
Supplement it with the fake data in SEED.JS */
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./database.sqlite');

function setTableUp(){
	console.log("MIGRATION TABLE PRESENT!")
}

module.exports = setTableUp;