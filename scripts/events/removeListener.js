const EventEmitter = require('events');
const emitter = new EventEmitter();
const listener = function() {
	  console.log('listener invoked!');
};
emitter.on("a", listener);
emitter.emit("a", "event");
console.log('event send!');
emitter.emit("a", "event1");
console.log('event send!');
console.log('before remove');
emitter.removeListener("a", listener);
console.log('after remove');
emitter.emit("a", "event2");
console.log('event send!');
emitter.removeListener("a", listener);
