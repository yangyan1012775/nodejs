const fs = require("fs");
const filename = "temp.txt";
const s = fs.statSync(filename);
	console.log("is dir =" + s.isDirectory());
	console.log("is file =" + s.isFile());


