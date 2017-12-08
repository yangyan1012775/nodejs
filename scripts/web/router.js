var http = require('http');
var url = require('url');
var staticRouter = ['/user/login', '/user/register'];

//create a server object:
http.createServer(function (req, res) {
  var parsed = url.parse(req.url);
  console.log(parsed);

  var path = staticRouter.indexOf(parsed.pathname) !== -1;
  if (path) {
    res.write('full matched router ' + parsed.pathname + " found!\n"); //write a response to the client
  }

  if (/^\/reg\/(.*)$/g.test(parsed.pathname)) {
    res.write('reg router ' + parsed.pathname + " found!\n"); //write a response to the client
  }

  res.write('request path = ' + parsed.pathname + "\n"); //write a response to the client
  res.write('Hello World!\n'); //write a response to the client
  res.end(); //end the response
  }).listen(8080); //the server object listens on port 8080
