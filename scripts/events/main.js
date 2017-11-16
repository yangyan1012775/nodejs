const EventEmitter = require('events');
const emitter = new EventEmitter();
emitter.on("a", (e, v) => {
	console.log("listener 1");
	console.log(e + " occurred!\n");
	console.log("value : "  + v + " received!\n");
});
emitter.on("a", (e, v) => {
	console.log("listener 1.5");
	console.log(e + " occurred!\n");
	console.log("value : "  + v + " received!\n");
});


emitter.on("a", (e, v) => {
	console.log("listener 2");
	console.log(e + " occurred!\n");
	console.log("value : "  + v + " received!\n");
});

emitter.on("b", (e, v) => {
	console.log("listener 3");
	console.log(e + " occurred!\n");
	console.log("value : "  + v + " received!\n");
});
emitter.emit("a", "event", "1");
emitter.emit("b", "event", "1");

