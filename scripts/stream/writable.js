const fs = require('fs');
const ws = fs.createWriteStream('foo-out.txt');
ws.write("writed by WritableStream\n");
ws.end("\n");
ws.on('finish', () => {
	  console.log('All writes are now complete.');
});
