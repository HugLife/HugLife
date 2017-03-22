var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database-mysql/models.js');

var app = express();


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

app.post('/')
app.get('/barlist', function (req, res) {
  db.selectThreeBars(function (error, result) {
  	if (error) {
  	  console.log('errored out /barlist', error);
  	}
  	console.log('This are the three bars', result);
  	res.send(result);
  });
});

app.get('/bar', function (req, res) {
  db.selectOneBar(2, function (error, result) {
  	if (error) {
  	  console.log('errored out /bar', error);
  	}
  	console.log('this is the bar', result);
  	res.send(result);
  })
})

app.get('/bartender', function (req, res) {
	db.selectOneBartender(2, 'Datum Bass', function (error, result) {
	  if (error) {
	  	console.log('errored out /bartender', error);
	  }
	  console.log('this is the bartender', result);
	  res.send(result);
	})
})

app.get('/bartenderlist', function (req, res) {
	db.selectAllBartendersFromBar(1, function (error, result) {
	  if (error) {
	  	console.log('errored out from /bartenderlist', error)
	  }
	  console.log('this is the bartender list', result);
	  res.send(result);
	})
})

app.listen(5000, function() {
  console.log('listening on port 5000!');
});

