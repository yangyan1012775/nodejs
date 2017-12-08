var http = require('http');
var url = require('url');
var staticRouter = ['/user/login', '/user/register'];

//create a server object:
http.createServer(function (req, res) {
  var parsed = url.parse(req.url);
  console.log(req.headers);
  console.log(req.method);

  if (req.method === "POST") {
    console.log("inside post");
    var data = [];
    var length = 0;
    req.on('data', function (chunk) {
      length += chunk.length;
      data.push(chunk);
    });
    req.on('end', function () {
      data = Buffer.concat(data, length);
      res.write("received:\n");
      res.write(String(data));
      res.end('\ndata received!\n');
    });          
} else {

      res.end('Hello world!\n');
}

}).listen(8080); //the server object listens on port 8080
