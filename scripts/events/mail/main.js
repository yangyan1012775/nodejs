const net = require('net');
const User = require("./user").User;
const Message = require("./message").Message;
const EventEmitter = require('events');
const StateProcessor = require('./state-processor').Processor;

const emitter = new EventEmitter();

// All sockets connections

let sockets = [];
const user = new User(emitter);
const message = new Message(emitter, sockets);

var server = net.createServer(function (socket) {
    let processor = new StateProcessor();
    processor.process(socket, null);
    socket.on('data', function (data) {
        processor.process(socket, data);
    });
    socket.on('close', function () {
        console.log("客户端连接已经断开！");
        for (var i = 0; i < sockets.length; i++) {
            let s = sockets[i];
            if (s === socket) {
                sockets.splice(i, 1);
                console.log("socket已经移除!");
            }
        }
    });
});

let port = process.env.NODE_PORT || 8080;
server.listen(port, () => {
    console.log("Server started at: " + port);
});