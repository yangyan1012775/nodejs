const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on("a", function () {
	  console.log('unlimited');
});
emitter.once("a", function () {
	  console.log('once');
});
emitter.emit("a", "event");
emitter.emit("a", "event1");
emitter.emit("a", "event2");
