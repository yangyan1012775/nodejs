const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on("a", (event) => {
	console.log(event + " occurred!\n");
});
emitter.on("a", function a1() {
	  console.log('a1');
});
emitter.on("a", function a2() {
	  console.log('a2');
});
emitter.on("a", function a3() {
	  console.log('a3');
});
emitter.emit("a", "event");

