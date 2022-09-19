var http = require("http");
var fs = require("fs");


/* Serving PDF file over node server */

http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "application/pdf" });
    console.log("listening..",3000)
    fs.readFile("all-about-node-serving-files/index.pdf", (error, data) => {
      if (error) {
        response.json({
          status: "error",
          message: "something isn't right",
        });
      } else {
        response.write(data);
        response.end();
      }
    });
  })
  .listen(3000);
