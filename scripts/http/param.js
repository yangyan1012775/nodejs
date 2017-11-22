const http = require('http');
const url = require('url');
const qs = require('querystring');

const server = http.createServer((req, res) => {

  let params = qs.parse(url.parse(req.url).query);
  console.log(params);

	res.end("params is parsed\n");
});
let port = process.env.NODE_PORT || 8080;
server.listen(port, () => {
		console.log("Server started at: " + port);
});

