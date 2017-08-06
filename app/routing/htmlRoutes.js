// https://uclax.bootcampcontent.com/UCLA-Coding-Boot-Camp/04-2017-Class-Repository/blob/master/13-Week/13.3/16-HotRestaurant/app/routing/htmlRoutes.js

var path = require("path");

module.exports = function(app) {

  app.get("/api/friendDataSet", function(req, res) {
    res.sendFile(path.join(__dirname, "/../data/friendDataSet.html"));
  });

  app.get("/server", function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/server.html"));
  });

  // If no matching route is found default to home
  app.use(function(req, res) {
    res.sendFile(path.join(__dirname, "/../public/home.html"));
  });
};