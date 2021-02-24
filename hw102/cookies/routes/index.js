var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});



router.get('/getname', function(req, res, next) {
  res.render('getName', { title: 'Express' });
});

module.exports = router;
