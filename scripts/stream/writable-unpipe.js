const fs = require('fs');
const ws = fs.createWriteStream('foo-out-1.txt');
const rs = fs.createReadStream('foo.txt');
ws.write("writed by WritableStream\n");
ws.on('unpipe', () => {
  console.error('the writer is unpiped!');
});
ws.on("finish", () => {
	console.log("content saved!");
});
rs.pipe(ws);
rs.unpipe(ws);
