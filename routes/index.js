var express = require('express');
var router = express.Router();
const User = require('../Schemas/users')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'TEST' });
});

router.post('/', function(req, res) {
  console.log('name : ' + req.body.name)
  console.log('phone number : ' + req.body.pn)

  const user = new User({
    name : req.body.name,
    phone_number : req.body.phone_number
  })

  user.save()
  .then(() => {
    console.log(user);
  })
  .catch((err) => {
    console.log("Error : " + err);
  });

  res.render('form.ejs', {'name' : req.body.name, 'pn' : req.body.pn})
})

router.use('/users',require('./users'));

module.exports = router;