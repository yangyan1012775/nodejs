const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on("a", (event) => {
	console.log(event + " occurred!\n");
});
emitter.emit("a", "event");

