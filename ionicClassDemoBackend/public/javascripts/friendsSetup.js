var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("mongodb://cph-cs241:cjs192@ds017514.mlab.com:17514/cjs_db", function(err, db) {
  var collection = db.collection('friends');
  collection.insertMany(friends,function(err,data){
    console.log(JSON.stringify(data));
    db.close();
  });
});

var friends = [

  {
    "userName":"LMC",
    "loc":{"type":"Point",
    "coordinates":[12.558933000000025,55.86276400000001]}
  },
  {
    "userName":"Cristina",
    "loc":{"type":"Point",
    "coordinates":[12.520122000000015,55.752604]}
  }
]

