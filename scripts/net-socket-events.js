const net = require("net");
const server = net.createServer((socket) => {
	const temp = [];
	socket.on("data", function(data) {
		console.log('data incoming');
		socket.write("You've send data with " + data.length + " long\n");
		temp.push(data);
	});
	socket.on("end", function() {
		console.log('data received');
		console.log(temp.join(''));
		//socket.write(temp.join(''));
	});
	socket.on("close", function() {
		console.log('remote socket closed!');
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
  console.log(err);
});
server.on('close', (err) => {
	console.log("server is closed!");
});
server.listen(process.env.NODE_PORT || 8888, () => {
	console.log("server is booting");
});
