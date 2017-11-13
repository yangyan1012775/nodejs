console.log(module.exports === exports);
exports = {
	c:100
};
console.log(exports);
console.log(module.exports);
console.log(module.exports === exports);
