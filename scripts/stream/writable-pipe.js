const fs = require('fs');
const ws = fs.createWriteStream('foo-out-1.txt');
const rs = fs.createReadStream('foo.txt');
ws.write("writed by WritableStream\n");
ws.on('pipe', () => {
  console.error('something is piping into the writer');
});
ws.on("finish", () => {
	console.log("content saved!");
});
rs.pipe(ws);
