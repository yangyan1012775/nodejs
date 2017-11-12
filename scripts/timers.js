var timer0 = setImmediate(function(a, b, c) {
    console.log("inside immediate", a, b, c);
    console.log(a, b, c);
}, 1000, 1, 'a');

var timer1 = setTimeout(function(a, b, c) {
    console.log("inside timeout", a, b, c);
}, 1000, 1, 'a');

var timer2 = setInterval(function(a, b, c) {
    console.log("inside interval", a, b, c);
}, 1000, 1, 'a');


console.log('process execution ended.');
