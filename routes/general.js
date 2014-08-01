var express = require('express');
var router = express.Router();

router.get('/', function(req, res) {
  res.render('screen-1', { });
});

router.get('/2/:name', function(req, res) {
  res.render('screen-2', { name: req.params.name });
});

/* inbox */
router.get('/3/:name/:read', function(req, res) {
  res.render('screen-3', { name: req.params.name, read: req.params.read });
});

router.get('/4/:name/:read', function(req, res) {
  res.render('screen-4', { name: req.params.name, read: req.params.read });
});

router.get('/5/:name/:read', function(req, res) {
  res.render('screen-5', { name: req.params.name, read: req.params.read });
});

router.get('/6/:name/:read', function(req, res) {
  res.render('screen-6', { name: req.params.name, read: req.params.read });
});

router.get('/7/:name/:read', function(req, res) {
  res.render('screen-7', { name: req.params.name, read: req.params.read });
});

router.get('/8', function(req, res) {
  res.render('screen-8', {  });
});

router.get('/9', function(req, res) {
  res.render('screen-9', {  });
});

module.exports = router;
