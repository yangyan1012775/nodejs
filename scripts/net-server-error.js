const net = require("net");
const server = net.createServer((socket) => {
});
server.on("connection", (socket) => {
	console.log("socket id = " + socket.id);
	console.log("new socket is coming");
	setTimeout(() => {
		server.emit("error");
	}, 1000);
});
server.on("listening", () => {
	console.log("server is listening");
});
server.on('error', (err) => {
	console.log("inside server error");
  // handle errors here
});
server.on('close', (err) => {
	console.log("server is closed!");
});
console.log('before listen');
server.listen(process.env.NODE_PORT || 8888, () => {
	console.log("server is booting");
});
console.log('after listen');
