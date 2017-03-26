var express = require('express');
var bodyParser = require('body-parser');
var db = require('../database-mysql/models.js');

var app = express();

var PORT = process.env.PORT || 5000;

app.use(express.static(__dirname + '/../client/dist'));
app.use(bodyParser.json());


//will get the first three bars on the database
app.get('/barlist', function (req, res) {
  db.selectThreeBars(function (error, result) {
  	if (error) {
  	  console.log('errored out /barlist', error);
  	}
  	console.log('This are the three bars', result);
  	res.send(result);
  });
});

//will get all the information of one bar, should receive
// that bar id in the body of the request as a string
app.post('/bar', function (req, res) {
  var body = '';
  req.on('data', function (chunk) {
    body += chunk;
    var barID = JSON.parse(body);
    db.selectOneBar(barID, function (error, result) {
    	if (error) {
    	  console.log('errored out /bar', error);
    	}
    	console.log('this is the bar', result);
    	res.send(result);
    })
  })
})  

//will get all the information of one bartender, should receive
//the id of the bartender in the body of the request as a string
app.post('/bartender', function (req, res) {
  var body = '';
  req.on('data', function (chunk) {
    body += chunk;
    var id = JSON.parse(body);
  	db.selectOneBartender(Number(id), function (error, result) {
  	  if (error) {
  	  	console.log('errored out /bartender', error);
  	  }
  	  console.log('this is the bartender', result);
  	  res.send(result);
  	})
  })
})

//will get all the bartenders associated to one bar, should receive
//the id of the bar in the body of the request as a string
app.post('/bartenderlist', function (req, res) {
  var body = '';
  req.on('data', function (chunk) {
    body += chunk;
    var barID = JSON.parse(body);
  	db.selectAllBartendersFromBar(barID, function (error, result) {
  	  if (error) {
  	  	console.log('errored out from /bartenderlist', error)
  	  }
  	  console.log('this is the bartender list', result);
  	  res.send(result);
  	})
  })
})

//will insert the bars into the database, should get a stringified array
//of objects in the body of the request, each representing one bar
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

//Will add 1 to either the left or right of a bartender's aspect
//Should receive an object with side, bartenderID and aspect properties
// side should be either right of left
// bartenderID should be the specific id of the bartender to rate
// aspect should be one of the following strings: expert_right, expert_left
// friendly_right, friendly_left, quick_right, quick_left
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
app.listen(PORT, function() {
  console.log('listening on port ' + PORT + '!');
});

