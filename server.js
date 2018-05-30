// created by me
// thi

const express = require("express");
const app = express();
const PORT = process.env.PORT || 4000;

app.listen(PORT);
console.log(`server.js is listening.  On port number _${PORT}_`);