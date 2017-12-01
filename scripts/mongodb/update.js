var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/mydb";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var myquery = { address: "Valley 345" };
    var newvalues = { name: "Mickey", address: "Canyon 123" };
    db.collection("user").updateOne(myquery, newvalues, function (err, res) {
        if (err) throw err;
        console.log(res);
        db.close();
    });
});