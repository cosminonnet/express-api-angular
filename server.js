
/**
 * Module dependencies.
 */
var express = require('express');
var http = require('http');
var path = require('path');
var mongoose = require('mongoose');

/**
 * Initializing system variables.
 */
var config = require('./server/configs/Database');
mongoose.connect(config.url);

/**
 * Initializing application.
 */
var app = express();

// All environments
app.set('port', process.env.PORT || 3000);
app.use(express.logger('dev'));
app.use(express.bodyParser()); //Handles post requests
app.use(express.cookieParser());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride()); //Handles put requests
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// Development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

/**
 * Initializing models and routes.
 */
require('./server/modules/feature/FeatureModel');
require('./server/modules/feature/FeatureRoutes')(app);

/**
 * Creating the server.
 */
http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});
