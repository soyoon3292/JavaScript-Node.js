var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  next('route');
}, function(req, res, next) {
  console.log('실행되지 않습니다');
  next();
}, function(req, res, next) {
  console.log('실행되지 않습니다');
  next();
});

router.get('/', function(req, res) {
  console.log('실행됩니다');
  res.render('index', { title: 'Express' });
});

module.exports = router;
