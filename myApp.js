var express = require('express');
var app = express();

var absolutePath = __dirname + "/views/index.html";
app.get("/", function(req, res){
  res.sendFile(absolutePath);
});



































 module.exports = app;
