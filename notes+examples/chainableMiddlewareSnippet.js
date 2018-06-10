// write a chainable middleware stack.  
// based on "Express.js Fundamentals - 6 - Middleware Explained" youtube
// June 10, 2018

//first write the three-chain fns withOUT next syntax 

const express = require("express");
const app = express();
const PORT = 4444;

const sayLast = ()=> {
	return "Genest";
}  // WON'T HOIST LIKE OTHER TWO.  MUST BE HERE, EVEN THOUGH THEY ARE DOWN THERE!!!!!!

//sayFirst().sayMiddle().sayLast();   // GIVES ERROR.  SAYS, 'WHAT IS NEXT ??'
let message = sayFirst() + sayMiddle() + sayLast() + new Date();  

// write two middles.  call them with dots, try out nexts.
function sayFirst() {
	return "Evan";
}

function sayMiddle() {
	return "Arthur";
}
app.get(`/`, (req, res)=>{
	res.write(message);
	app.end();
} );
app.listen(PORT);
console.log("URL is localhost: " + PORT);
