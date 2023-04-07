var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('cakes', { title: 'Search Results cakes' });
});

module.exports = router;

