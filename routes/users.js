var express = require('express');
var url = require('url');
var router = express.Router();
const User = require('../model/users');
const Board = require('../model/board');

// read
router.post('/signIn', function(req, res) {
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
          res.send("<script> alert('아이디 혹은 비밀번호를 확인해주세요.');location.href='/' </script>");
        }
        else {
          res.redirect(url.format({
            pathname:'/waitingRoom',
            query: {
              NAME: user.NAME,
              ID: user.ID,
              PW: user.PW
            }
          }));
        };
      }
    });
});

// create
router.post('/signUp', function(req, res) {
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
          res.send("<script> alert('이미 사용중인 아이디입니다.');location.href='/signUp' </script>");
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
