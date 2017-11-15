const dgram = require("dgram");
const client = dgram.createSocket("udp4");
let message = Buffer.from('Udp 客户端请求');
// let server = 'localhost';
let server = '192.168.21.33';
let port = 4333;
client.send(message, port, server, (err) => {
	console.log("client close");
});
client.on("message", (msg, rinfo) => {
console.log(`client: got: ${rinfo.address}:${rinfo.port}\n`);
console.log("client: message from server, received");
console.log("client: message is " + msg);
client.close();
});
