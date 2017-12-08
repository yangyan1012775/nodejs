const http = require('http');
const url = require('url');
const server = http.createServer((req, res) => {

  let path = url.parse(req.url);
  console.log(path);

	res.write("url is" + req.url + "\n");
	res.end("PATH is" + path.pathname + "\n");
});
let port = process.env.NODE_PORT || 8080;
server.listen(port, () => {
		console.log("Server started at: " + port);
});

