const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const session = require('express-session');
const config = require('./config/config');
const passport = require('./config/passport');

mongoose.connect('mongodb://localhost/passport_app');

const api_routes = require('./routes/api_routes');
const passport_routes = require('./routes/passport_routes');

const app = express();

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'client/build')));

app.use(session({
	secret: config.secret,
	resave: false,
	proxy: true,
	saveUninitialized: true
}));

app.use(passport.initialize());
app.use(passport.session());

app.use('/auth', passport_routes);
app.use('/api', api_routes);

app.get('*', function(req, res) {
  res.sendFile(path.join(__dirname, 'client/build/index.html'));
});

module.exports = app;
