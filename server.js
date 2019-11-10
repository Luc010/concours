var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var app = express();

const db = require('./app/config/db.config.js');
app.set('views', __dirname + '/views')
app.engine('ejs', require('ejs').renderFile);
app.set('view engine','ejs');
app.get('/404', function (req, res, next) {
  next();// trigger a 404 since no other middleware will match /404 after this one, and we're not responding here
});
app.get('/403', function (req, res, next) {// trigger a 403 error
  var err = new Error('not allowed!');
  err.status = 403;
  next(err);
});
app.get('/500', function (req, res, next) {// trigger a generic (500) error
  next(new Error('keyboard cat!'));
});
require('./app/route/user.route.js')(app);

// Create a Server
var server = app.listen(3000, "localhost", function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("App listening at http://localhost:3000", host, port);
});