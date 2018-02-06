var express = require('express');
var router = express.Router();

// GET home page. 
//this function is for the homepage/ what shows up on load

//index.hjs is an HTML file that displays the text
router.get('/', function(req, res, next) {
  
  res.render('index', { 
  	//heading for the page
  	title: 'Random Number Generator',
  	
  	//sets number variable equal to random number, then rounds it down
  	number: Math.trunc(Math.random() * 100)
  });
});

module.exports = router;
