var express = require('express');
var router = express.Router();
const User = require('../Schemas/users')

router.get('/', function(req, res, next) {
  
});

router.post('/', (req,res,next) => {
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
})

module.exports = router;