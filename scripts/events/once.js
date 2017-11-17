const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on("a", function (v) {
	  console.log('value: ' + v + " received!");
	  console.log('unlimited');
});
emitter.once("a", function (v) {
	  console.log('value: ' + v + " received!");
	  console.log('once');
});
emitter.emit("a", "event");
emitter.emit("a", "event1");
emitter.emit("a", "event2");
emitter.emit("a", "event3");
