const http = require('http');
const html = `
<DOCTYPE html><html>
	<body>
	<h1>Hello World!</h1>
	</body>
	</html>
`;
const server = http.createServer((req, res) => {
	res.setHeader("Content-Type", "text/plain");
	//res.setHeader("Content-Type", "text/html");
	// setInterval(() => {
	//	let date = "" + new Date();
//		res.write(Buffer.from(date));
//	}, 100);
	res.end("Hello world!");
	// res.end(html);
});
let port = process.env.NODE_PORT || 8080;
server.listen(port, () => {
		console.log("Server started at: " + port);
});

