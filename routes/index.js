var express = require('express');
var router = express.Router();
const User = require('../model/users');
const Board = require('../model/board');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/signUp', function(req, res) {
  console.log('signUp page');

  res.render('signUp');
});

router.get('/waitingRoom', function(req, res) {
  console.log('waitingRoom page');
  console.log(req.query);

  res.render('waitingRoom',{user: req.query});
});

module.exports = router;