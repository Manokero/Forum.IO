var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',function(req,res){
 console.log("hola")
})

router.get('/signup', function(req, res, next) {
  res.render('signup');
});

router.get('/signin',function(req,res){
	res.send("NOT STILL AVALIBLE")
})

module.exports = router;
