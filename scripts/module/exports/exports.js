console.log('before change');
console.log(module.exports === exports);
exports = {a : 100};
console.log('after change');
console.log(module.exports === exports);
