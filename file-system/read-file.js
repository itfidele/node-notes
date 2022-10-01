const fs = require("fs");

fs.readFile("file-system/example.txt", (err, data) => {
  if (err) throw err;
  console.log(data.toString());
});
