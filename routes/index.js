var express = require('express');
var router = express.Router();

/* GET home page. */

router.get('/', function(req, res) {
  res.status(204).send();
});

module.exports = router;