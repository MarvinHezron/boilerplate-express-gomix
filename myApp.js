var express = require('express');
var app = express();

app.use("/public", express.static(__dirname + "/public"));
var absolutePath = __dirname + "/views/index.html";
app.get("/", function(req, res){
  res.sendFile(absolutePath);
});



































 module.exports = app;
