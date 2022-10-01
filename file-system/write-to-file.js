const fs = require("fs");

content = "I'm just writing on the file sync /  but it clears the whole data in it";
fs.writeFileSync("file-system/example.txt", content);

console.log("Done!")
