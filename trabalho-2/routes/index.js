var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: '<u>Express/u>',
time: new Date()  });
});

module.exports = router;
