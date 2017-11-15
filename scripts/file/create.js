const fs = require("fs");
const filename = "temp.txt";
//fs.openSync(filename, "w+");
fs.createWriteStream(filename);
