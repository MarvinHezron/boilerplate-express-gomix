var express = require('express');
var app = express();


app.use("/public", express.static(__dirname + "/public"));
app.get("/", function(req, res, next){
  console.log(req.method + " " + req.path + " " + "-" + req.ip);
  res.sendFile(__dirname + "/views/index.html");
  next();
});

app.get("/json", function(req, res, next){
  console.log(req.method + " " + req.path + " " + "-" + req.ip);
  if(process.env.MESSAGE_STYLE == "uppercase"){
    res.json(
    {"message": "Hello json".toUpperCase()}
  );
  }else {
    res.json(
    {"message": "Hello json"}
  );
  }
  next();
});




































 module.exports = app;
