var express = require('express');
var router = express.Router();
const User = require('../model/users');
const Board = require('../model/board');

// read
router.post('/signin', function(req, res) {
  console.log('id : ' + req.body.id);
  console.log('pw : ' + req.body.pw);

  User.findOne(
    {ID: req.body.id, PW: req.body.pw}, function(err, user) {
      console.log(user);

      if(err) {
        res.send(err);
      }
      else {
        if(user == null) {
          res.render('signInFail');
        }
        else {
          res.render('waitingRoom', {user: user})
        }
      }
    });
});

// create
router.post('/signup', function(req, res) {
  console.log('name : ' + req.body.name);
  console.log('id : ' + req.body.id);
  console.log('pw : ' + req.body.pw);

  User.findOne(
    {ID: req.body.id}, function(err, user) {
      if(err) {
        res.send(err);
      }
      else {
        if(user != null) {
          res.render('signUpFail');
        }
        else {
          const user = new User({
            NAME: req.body.name,
            ID: req.body.id,
            PW: req.body.pw
          });
        
          user.save()
          .then(() => {
            console.log(user);
          })
          .catch((err) => {
            console.log("Error : " + err);
          })
        
          res.redirect('/');
        }
      }
    });
});

module.exports = router;
