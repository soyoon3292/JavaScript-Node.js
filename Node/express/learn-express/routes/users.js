var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/flash', function(req, res) {
  req.session.message = '세션 매시지';
  req.flash('message', 'flash 메시지');
  res.redirect('/users/flash/result');
});

router.get('/flash/result', function(req, res) {
  res.send(`${req.session.message} ${req.flash('message')}`);
});

router.get('/:id', function(req, res) {
  console.log(req.params, req.query);
  // res.json(req.params);
  res.send(`${JSON.stringify(req.params)} ${JSON.stringify(req.query)}`);
});

module.exports = router;
