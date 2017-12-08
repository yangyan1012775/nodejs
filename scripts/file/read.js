const fs = require("fs");
const filename = "temp.txt";
const rs = fs.createReadStream(filename);
rs.on("data", (chunk) => {
	console.log(chunk);
	console.log("on reading data" + chunk);
});

