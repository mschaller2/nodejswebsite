// dependencies 
var express = require('express');
var expressLayout = require('express-ejs-layouts');
var app = express();
var Twitter = require('twitter');
var port = 3000;
var bodyParser = require('body-parser');

/** 
twitter 
var client = new Twitter({
    consumer_key: process.env.TWITTER_CONSUMER_KEY,
    consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
    access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
    access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
  });
**/

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

// ejs/express layouts
app.set('view engine', 'ejs');
app.use(expressLayout);

// routing
var router = require('./app/routes');
app.use('/', router);

// static files location setting
app.use(express.static(__dirname + '/css'));
app.use(express.static(__dirname + '/images'));

// start
app.listen(port);