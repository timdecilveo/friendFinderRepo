// https://uclax.bootcampcontent.com/UCLA-Coding-Boot-Camp/04-2017-Class-Repository/blob/master/13-Week/13.3/16-HotRestaurant/app/routing/apiRoutes.js

var friendData = require("../data/friends");

module.exports = function(app) {
  var friendLength = 15;
  
  app.get("/api/friendDataSet", function(req, res) {
    res.json(friendData);
    console.log(friendData);
  });

  app.post("/api/friendDataSet", function(req, res) {
    if (friendData.length < friendLength) {
      friendData.push(req.body);
      res.json(true);
    }
    else{
      console.log("NOT WHAT YOU WANTED!");
    }
  });
};