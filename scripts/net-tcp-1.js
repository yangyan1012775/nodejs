const net = require("net");
const server = net.createServer((socket) => {
  socket.end('Hello from tcp server!\n');
}).on('error', (err) => {
  // handle errors here
  throw err;
});
server.listen(process.env.NODE_PORT || 8888);
