// Just review the syntax of req, and parse by
// writing a logger that will print out 
// as much of the req body as possible.
// @mistergenest June 29, 2018

const express = require("express");
const app = express();

function loogoo(req){
	let message = [];
	// make MESS an object -> json later
	message.push(['hey', 'nanny', 'hey', 'now']);
	message.push([
		'REQ.URL:',
		req.url,
		'REQ.METHOD:',
		req.method,
		'REQ.PARAMS:',
		req.params,
		'EVERYTHING ON REQ.PARAMS:',
		Object.keys(req.params)
	]);
	const out = message.toString();
	return out;
}

app.get(`/hilldale`, (req, res)=>{
	res.send(`The bananas are full price. Here is the output of the LOOGOO logger function you made: ${loogoo(req)}`);
});
app.get(`/`, (req, res, next)=>{
	res.status(202).write("T.E.E.");
	// to my surprise, the above works.
	res.end();
});



const PORT = 7337;
app.listen(PORT, () => {console.log(`Burning Bush on ${PORT}`)} );
