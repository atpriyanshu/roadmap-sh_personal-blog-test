var express = require('express');
var router = express.Router();

var db = require('../db/index');

router.get('/admin', function(req, res) {
  res.render('admin', { blogs: db.getData() });
});

router.get('/edit/:id', function(req, res) {
  res.render('edit', { blog: db.getData()[req.params.id], i: req.params.id });
});

router.post('/edit/:id', function(req, res) {
  db.edit({
    name: req.body.name,
    content: req.body.content,
    time: Date.now()
  }, req.params.id);
  res.redirect('/');
});

router.get('/new', function(req, res) {
  res.render('new');
});

router.post('/new', function(req, res) {
  db.add({
    name: req.body.name,
    content: req.body.content,
    time: Date.now()
  });
  res.redirect('/');
});

module.exports = router;