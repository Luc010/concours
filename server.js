var express = require('express');
var expressLayouts = require('express-ejs-layouts');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.set('view engine', 'ejs');
// APPLY CSS
app.use(expressLayouts);

const db = require('./app/config/db.config.js');

require('./app/route/user.route.js')(app);
 
// Create a Server
var server = app.listen(8081, function () {
  var host = server.address().address;
  var port = server.address().port;
  console.log("App listening at http://%s:%s", host, port);
});