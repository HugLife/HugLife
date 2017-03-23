var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database-mysql/models.js');

var app = express();


app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());

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

app.post('/barlist', function (req, res) {
  var body = '';
  req.on('data', function (chunk) {
    body += chunk;
    var bars = JSON.parse(body);
    bars.forEach(function (bar) {
      db.insertBarIntoDB(bar, function(error, result) {
        if (error) {
          console.log('Errored out from posting bartenderlist into database', error)
        }
        console.log('posted the bar to the database succesfully')
      })
    })
  })
  res.send();
})

app.post('/rate', function (req, res) {
  var body = '';
  req.on('data', function (chunk) {
    body += chunk;
    var rating = JSON.parse(body);

    if (rating.side === 'right') {
      db.increaseBartenderRating(rating.bartenderID, rating.aspect, function (error, results) {
        if (error) {
          console.log('errored out from rating serverside', error);
        }
        console.log('rated succesfully')
        res.send();
      })
    } else {
      db.decreaseBartenderRating(rating.bartenderID, rating.aspect, function (error, results) {
        if (error) {
          console.log('errored out from decreasing rating serverside', error);
        }
        console.log('decreased rating succesfully')
        res.send();
      })
    }
  })
})
app.listen(5000, function() {
  console.log('listening on port 5000!');
});

