var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/mydb";

MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var mysort = { name: 1 };
    db.collection("user").find({}, { _id: false }).sort(mysort).skip(5).limit(20).toArray(function (err, result) {
        if (err) throw err;
        console.log(result);
        db.close();
    });
});