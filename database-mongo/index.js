var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/drinkd');

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var UsersSchema = mongoose.Schema({
  username: String,
  usertype: String,
  description: String
});

var BartenderBarSchema = mongoose.Schema({
  barid: Number,
  bartenderid: Number,
  description: String
});

var BarSchema = mongoose.Schema({
  ID: Number,
  Name: String,
  Address: String,
  imgurl: String,
  Hours: String,
  PhoneNumber: String,
  description: String
});

var ReviewSchema = mongoose.Schema({
  ID: Number,
  Reviewer: String,
  Metric: Number,
  Icons: Boolean,
  description: String
});


var User = mongoose.model('Users', UsersSchema);
var Bartender = mongoose.model('Bartender', BartenderBarSchema);
var Bar = mongoose.model('Bar', BarSchema);
var Review = mongoose.model('Review', ReviewSchema);



var selectAllUsers = function(callback) {
  User.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAllUsers = selectAllUsers;