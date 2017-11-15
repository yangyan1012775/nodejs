var immediate = setImmediate(function(a, b, c) {
    console.log(a, b, c);
}, 1000, 1, 'a');

var timer = setTimeout(function(a, b, c) {
    console.log(a, b, c);
}, 2, 2, 'b');

console.log("hello");
