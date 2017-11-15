const fs = require("fs");
const filename = "temp.txt";
const newfilename = "temp1.txt";
fs.renameSync(filename, newfilename);

