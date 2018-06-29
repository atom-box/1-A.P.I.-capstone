// Just review the syntax of req, and parse by
// writing a logger that will print out 
// as much of the req body as possible.
// @mistergenest June 29, 2018

const express = require("express");
const app = express();

function loogoo(){
	
}

app.get(`/hilldale`, (req, res)=>{
	res.send(`The bananas are full price.`);
});
app.get(`/`, (req, res, next)=>{
	res.status(202).write("T.E.E.");
	// to my surprise, the above works.
	res.end();
});



const PORT = 7337;
app.listen(PORT, () => {console.log(`Burning Bush on ${PORT}`)} );
