const fs = require('fs');
const rs = fs.createReadStream('foo.txt');
rs.on('readable', () => {
  let b = rs.read();
  let s = new String(b);
  console.log('readable:', b);
  console.log('readable:', s);
});
rs.on('end', () => {
	console.log('data transfer end');
});
