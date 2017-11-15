const fs = require("fs");
const filename = "temp.txt";
if (fs.existsSync(filename)) {
	  console.log("file exists");
} else {
	  console.log("file not exist");
}
