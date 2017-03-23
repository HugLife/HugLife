var mysql = require('mysql');
var mysqlConfig = require('./config.js');

var connection = mysql.createConnection(mysqlConfig);

var selectThreeBars = function(callback) {
  connection.query('SELECT * FROM bars LIMIT 3', function (err, results, fields) {
	if (err) {
	  console.log('errored out from getting bars on models.js');
	  callback(err, null);
	} else {
	  callback(null, results);
	}
  });
};


var selectOneBar = function (id, callback) {
  connection.query(`SELECT * FROM bars WHERE bars.id = '${id}'`, function (err, results, fields) {
  	if (err) {
  	  console.log('errored out from getting one bar on models.js');
  	  callback(err, null);
  	} else {
  	  callback(null, results);
  	}
  });
};

var selectOneBartender = function (barid, btname, callback) {
  connection.query(`SELECT * FROM bartenders WHERE bartenders.bar_id = '${barid}' AND bartenders.name = '${btname}'`, function (err, results, fields) {
  	if (err) {
  	  console.log('errored out from getting one bartender on models.js');
  	  callback(err, null);
  	} else {
  	  callback(null, results);
  	}
  });
};

var selectAllBartendersFromBar = function (barid, callback) {
  connection.query(`SELECT * FROM bartenders WHERE bartenders.bar_id = '${barid}'`, function (err, results, fields) {
  	if (err) {
  	  console.log('errored out from getting all bartenders from one bar');
  	  callback(err, null);
  	} else {
  	  callback(null, results);
  	}
  });
};

var insertBarIntoDB = function (bar, callback) {
  connection.query(`INSERT IGNORE INTO bars (id, name, address) VALUES ('${bar.id}', '${bar.name}', '${bar.vicinity}')`, function (err, results, fields) {
    if (err) {
      console.log('errored out from inserting bar into database');
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var increaseBartenderRating = function (bartender, aspect, callback) {
  connection.query(`UPDATE bartenders SET '${aspect}' = '${aspect}' + 1 WHERE id = ${bartender.id}`, function (err, results, fields) {
    if (err) {
      console.log('errored out from increasing some aspect of the bartender')
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

var decreaseBartenderRating = function (bartenderID, aspect, callback) {
  connection.query(`UPDATE bartenders SET '${aspect}' = '${aspect}' - 1 WHERE id = ${bartenderID}`, function (err, results, fields) {
    if (err) {
      console.log('errored out from decreasing some aspect of the bartender')
      callback(err, null);
    } else {
      callback(null, results);
    }
  });
};

module.exports.selectThreeBars = selectThreeBars;
module.exports.selectOneBar = selectOneBar;
module.exports.selectOneBartender = selectOneBartender;
module.exports.selectAllBartendersFromBar = selectAllBartendersFromBar;
module.exports.insertBarIntoDB = insertBarIntoDB;
module.exports.increaseBartenderRating = increaseBartenderRating;
module.exports.decreaseBartenderRating = decreaseBartenderRating;