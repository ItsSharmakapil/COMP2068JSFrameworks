var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const mongoose = require('mongoose'); // Import mongoose modulenpm install

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const express = require('express');


const studentsRouter = require('./routes/students');
(express()).use('/students', studentsRouter);

(express()).use('/students', studentsRouter); 


var app = express();

// Connect to MongoDB
mongoose.connect('mongodb+srv://KapilSharma200536211:KapilJavascript911@cluster0.qu1depb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB', err));


// view engine setup
(express()).set('views', path.join(__dirname, 'views'));
(express()).set('view engine', 'jade');

(express()).use(logger('dev'));
(express()).use(express.json());
(express()).use(express.urlencoded({ extended: false }));
(express()).use(cookieParser());
(express()).use(express.static(path.join(__dirname, 'public')));

(express()).use('/', indexRouter);
(express()).use('/users', usersRouter);

// catch 404 and forward to error handler
(express()).use(function(req, res, next) {
  next(createError(404));
});

// error handler
(express()).use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = express();
