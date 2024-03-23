var express = require('express');
var router = express.Router();

// Home page route
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

// Sidhu Moosewala route
router.get('/sidhu', function(req, res, next) {
  res.render('sidhu', { title: 'Sidhu Moosewala' });
});

// Karan Aujla route
router.get('/karan', function(req, res, next) {
  res.render('karan', { title: 'Karan Aujla' });
});

// Navaan Sandhu route
router.get('/navaan', function(req, res, next) {
  res.render('navaan', { title: 'Navaan Sandhu' });
});

// Jordan Sandhu route
router.get('/jordan', function(req, res, next) {
  res.render('jordan', { title: 'Jordan Sandhu' });
});

module.exports = router;
