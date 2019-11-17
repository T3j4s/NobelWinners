
var express = require('express');
var bodyParser = require('body-parser');
var nobelRoutes = require('./routes/nobel.route');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

//print every request in server.
app.use(function (req, res, next) {
  //allow cros origin request.
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,Content-Type,Accept");
  //call next methods in pipeline
  next();
});

app.use('/api', nobelRoutes);


app.listen(8001, '127.0.0.1', (err) => {
  if (err) {
    console.log("Unable to connect to server");
  }
  else {
    console.log("connection to server successfully established");
  }
});
