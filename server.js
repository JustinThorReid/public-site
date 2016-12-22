var express = require('express'),
mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/test');
var db = mongoose.connection;

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("Connected!!")
});


function connectDb() {
	mongoose.connect(function (db) {
		var app = express.init(db);


	})
}

module.exports.start = function start(callback) {

}