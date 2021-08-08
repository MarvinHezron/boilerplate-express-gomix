var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: false}));
app.use(function (req, res, next) {
  console.log(req.method + " " + req.path + " - " + req.ip);
  next();
});
app.use("/public", express.static(__dirname + "/public"));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/views/index.html");
});

app.get("/json", function(req, res){
  if(process.env.MESSAGE_STYLE == "uppercase"){
    res.json(
    {"message": "Hello json".toUpperCase()}
  );
  }else {
    res.json(
    {"message": "Hello json"}
  );
  }
});

app.get("/now", function(req, res, next){
  req.time = new Date().toString();
  next()}, function(req, res){
  res.json(
    {time: req.time}
  )
}
  );

app.get("/:word/echo", function(req, res){
  res.json(
  {echo: req.params.word}
  )
});


app.get("/name", function(req, res){
  var firstname = req.query.first;
  var lastname = req.query.last;
  res.json(
  {name: `${firstname} ${lastname}`}
  )
});

app.post("/name", function(req, res){
    var string = req.body.first + " " + req.body.last;
   res.json({ name: string });
});
































 module.exports = app;
