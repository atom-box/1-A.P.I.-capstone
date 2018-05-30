// created by me, 100%
// This is the main javascript that calls all else

const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;
const {createArtist, createSeries, createIssue} = require('./migration.js');
setTableUp();
app.listen(PORT);
console.log(`server.js is listening.  On port number _${PORT}_`);