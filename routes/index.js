var express = require('express');
var router = express.Router();

var db = require('../db/index');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { blogs: db.getData() });
});

router.get('/blogs/:id', function(req, res) {
  res.render('blog', { blog: db.getData()[req.params.id]} );
});

module.exports = router;
