const fs = require("fs");

const filename = "file-system/example.txt";

var content = fs.readFileSync(filename);

console.log("Content:\n\n"+content.toString());
