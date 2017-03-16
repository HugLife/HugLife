var express = require('express');
var bodyParser = require('body-parser');
var drinkd = require('../database-mongo');

var app = express();


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());


app.get('/users', function (req, res) {
  drinkd.selectAllUsers(function(err, data) {
    if(err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.listen(5000, function() {
  console.log('listening on port 5000!');
});

