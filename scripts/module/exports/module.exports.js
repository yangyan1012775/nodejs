console.log('before change');
console.log(module.exports === exports);
module.exports = {a : 100};
console.log('after change');
console.log(module.exports === exports);
