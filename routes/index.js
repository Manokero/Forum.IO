var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/',function(req,res){
 res.render('index')
})

router.get('/signup', function(req, res, next) {
  res.render('signup');
});

router.post('/signup',function(req,res){
	
})

router.get('/signin',function(req,res){
	res.send("NOT STILL AVALIBLE")
})



module.exports = router;
