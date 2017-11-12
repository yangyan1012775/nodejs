var net = require('net');

var server = net.createServer(function (socket) {
	socket.write("Hello to user from " + socket.remoteAddress);
	socket.write('hello\n');
	socket.write('world\n');

	socket.on('data', function (data) {
		var prompt = "You've sent the following message with length " + data.length + "\n";
		socket.write(prompt);
		socket.write(data);
	});
});

server.listen(8000);
