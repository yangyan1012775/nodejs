var http = require('http');
http.createServer(function (req, res) {
  res.writeHead(200, {
    'Set-Cookie': 'mycookie=test',
    'Content-Type': 'text/plain'
  });
  res.write('Hello World!');
  res.end();
}).listen(8080);
