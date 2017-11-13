// 指向同一个对象
console.log(module.exports === exports);

// 默认无属性
console.log(exports.a);

// module.exports修改属性后，仍相等, 并且exports获得新的属性
module.exports.a = 100;
console.log(module.exports === exports);
console.log(exports);

// exports修改属性后, 仍然相等
exports.b = {
	a: 100
};
console.log(module.exports === exports);
console.log(exports);
