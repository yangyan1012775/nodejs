var fs = require('fs');
var rs = fs.createReadStream('file.txt');
var data = '';
rs.on("data", function (trunk){
    console.log("inside data");
    data += trunk;
});
rs.on("end", function () {
    console.log(data);
});

