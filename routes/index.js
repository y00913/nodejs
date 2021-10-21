var express = require('express');
var router = express.Router();
const User = require('../model/users');
const Board = require('../model/board');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/signIn', function(req, res) {
  console.log('signIn page');

  res.render('signIn');
});

router.get('/signUp', function(req, res) {
  console.log('signUp page');

  res.render('signUp');
});

module.exports = router;