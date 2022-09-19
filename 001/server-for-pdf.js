var http = require("http");
var fs = require("fs");

http.createServer((request, response) => {
    response.writeHead(200, { "Content-Type": "application/pdf" });
    console.log("listening..",3000)
    fs.readFile("001/index.pdf", (error, data) => {
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
