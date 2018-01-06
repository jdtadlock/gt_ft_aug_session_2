var express = require('express');
var router = express.Router();

/* GET home page. */
// http:localhost:5000/api/test
router.get('/', function(req, res, next) {
  res.send('yep');
});

module.exports = router;
