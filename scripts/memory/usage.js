const v8 = require('v8');
console.log(process.memoryUsage());
console.log(v8.getHeapSpaceStatistics());
console.log(process.memoryUsage());
console.log(v8.getHeapSpaceStatistics());
