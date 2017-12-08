const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on("a", function listener() {
	  console.log('listener invoked!');
});
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
