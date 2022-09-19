var http = require("http");

var host = "127.0.0.1";
var port = 3000;


/* simple server */

var server = http.createServer((request, response) => {
  response.writeHead(200, { "Content-Type": "text/plain" });
  console.log("Server Working");
  response.end("Server working success");
});

server.listen(port, host, (error) => {
  if (error) {
    return console.log("something went wrong");
  }
  console.log(`server listening on port`, port);
});
