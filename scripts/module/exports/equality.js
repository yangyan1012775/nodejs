console.log(module.exports === exports);
console.log("exports = " + exports);
console.log("number of attributes = " + Object.keys(exports).length);
console.log("module.exports = " + module.exports);
console.log("number of attributes = " + Object.keys(module.exports).length);

exports.a = 100;
module.exports.b = 10;
console.log(exports.a);
console.log(exports.b);

module.exports.b = 100;

console.log(module.exports === exports);
