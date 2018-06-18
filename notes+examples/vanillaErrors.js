const http = require('http');
const PORT = 2112;

http.createServer((request, response) => {
  const { headers, method, url } = request;
  let body = [];
  request.on('error', (err) => {
    console.error(err);
  }).on('data', (chunk) => {
    body.push(chunk);
  }).on('end', () => {
    body = Buffer.concat(body).toString();
    // At this point, we have the headers, method, url and body, and can now
    // do whatever we need to in order to respond to this request.
  });
}).listen(PORT); // Activates this server, listening on port 8080.

console.log(`Local  host   is    ${PORT}`);

// sara is associate dean
// dean is Japanese-American
// that emily heller did the Action-Research on teacher learning cycle

/*
As we cheered #ElTri, 
my subconcious mind imagined the Zimmerman telegram was accidentally delivered to Orotorio, who rebuffed it with a sprinting, daring, confident offense, rushing across the Atlantic, sending GER to the showers, ending WWII prematurely.

A vigorous, daring response to the Zimmerman telegram, years later.
*/