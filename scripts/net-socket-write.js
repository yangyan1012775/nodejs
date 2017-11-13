const net = require("net");
const server = net.createServer((socket) => {
	socket.on("data", function(data) {
		socket.write(data);
	});
});
server.on("connection", (socket) => {
	console.log("new socket is coming");
	console.log("Socket.remoteAddress = " + socket.remoteAddress);
	console.log("Socket.remotePort = " + socket.remotePort);
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
server.listen(process.env.NODE_PORT || 8888, () => {
	console.log("server is booting");
});
