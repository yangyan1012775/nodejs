var net = require('net');
let sockets = [];

function sendMessage(src, des, data) {
	try {
	let message = "Message from: " + src.remoteAddress + "\n";
	des.write(message);
	des.write(data);
		des.write("\n");
	} catch( e) {
		console.log(e);
	}
}

var server = net.createServer(function (socket) {
	
	console.log("user login from: " + socket.remoteAddress);
	sockets.push(socket);
	console.log("current users = " + sockets.length);
	socket.write("Hello to user from " + socket.remoteAddress);
	socket.on('data', function (data) {
		for( var i = 0; i < sockets.length; i++) {
	let s = sockets[i];
	sendMessage(socket, s, data); 
}
	});
	socket.on('close', function() {
		console.log("client disconnected");
		for(var i = 0; i < sockets.length; i ++) {
			let s = sockets[i];
			if (s === socket) {
				sockets.splice(i, 1);
				console.log("socket removed");
			}
		}
	});
});

let port = process.env.NODE_PORT || 8080;
server.listen(port, () => {
	console.log("Server started at: " + port);
});

