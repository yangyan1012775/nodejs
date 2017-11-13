const dgram = require('dgram');
const client = dgram.createSocket('udp4');
const message = Buffer.from('Udp 客户端请求');
client.send(message, 4333, 'localhost');
client.on("message", (msg, rinfo) => {
	  console.log(`client got: ${msg} from ${rinfo.address}:${rinfo.port}`);
	console.log("message from server, received");
	console.log("message is" + msg);
	client.close();
});
