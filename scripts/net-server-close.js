const net = require("net");
const server = net.createServer((socket) => {
});
server.on("connection", (socket) => {
	console.log("socket id = " + socket.id);
	console.log("new socket is coming");
	setTimeout(() => {
		console.log("inside closing");
		server.close();
	}, 2000);
});
server.on("listening", () => {
	console.log("server is listening");
});
server.on('error', (err) => {
  // handle errors here
  throw err;
});
server.on('close', (err) => {
	console.log("server is closed!");
});
console.log('before listen');
server.listen(process.env.NODE_PORT || 8888, () => {
	console.log("server is booting");
});
console.log('after listen');
