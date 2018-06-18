const http = require('http');
const PORT = 2112;
const srvr = http.createServer((req, res)=>{
	console.log(`I see    _${Object.keys(req)}_ &  _${PORT}_`);
	//  stay tuned
}  );

srvr.on('req', (req, res) => {

	//  coming soon, too
	const { method, url} = req;
	console.log('I see    _${method}_ &  _${url}_');
// Weird! Cool.  Surprising:
// Note -- req is an OBJECT
// Note -- req is an instance of IncomingMessage !! 
// Note -- this FAILED when outside this code-block.


} )

srvr.listen(PORT);
console.log(`Local  host   is    ${PORT}`);

// sara is associate dean
// dean is Japanese-American
// that emily heller did the Action-Research on teacher learning cycle

/*
As we cheered #ElTri, 
my subconcious mind imagined the Zimmerman telegram was accidentally delivered to Orotorio, who rebuffed it with a sprinting, daring, confident offense, rushing across the Atlantic, sending GER to the showers, ending WWII prematurely.

A vigorous, daring response to the Zimmerman telegram, years later.
*/