var express = require('express');
var router = express.Router();
const User = require('../Schemas/users')

/* GET home page. */
router.get('/', function(req, res, next) {
  User.find(function(err, priv){
    // console.log(priv);
    res.render('index',{priv: priv});
  });

});

router.post('/add', function(req, res) {
  console.log('name : ' + req.body.name)
  console.log('phone number : ' + req.body.pn)

  const user = new User();
  user.name = req.body.name;
  user.phone_number = req.body.pn;

  user.save()
  .then(() => {
    console.log(user);
  })
  .catch((err) => {
    console.log("Error : " + err);
  });

  res.redirect('/');
});

router.post('/delete/:id', function(req, res) {
  User.findByIdAndDelete(req.params.id, function(err, docs) {
    if(err) console.log(err);
    else console.log("Deleted : ", docs);
  });

  res.redirect('/');
});

router.post('/update/:id', function(req, res) {
  User.findById(req.params.id, function(err, user) {
    if(err) console.log(err);
    user.name = req.body.name;
    user.phone_number = req.body.pn;

    user.save()
  .then(() => {
    console.log(user);
  })
  .catch((err) => {
    console.log("Error : " + err);
  });

  });

  setTimeout(() => {res.redirect('/')}, 100);
});

module.exports = router;