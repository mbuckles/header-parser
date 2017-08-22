var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
<<<<<<< HEAD
  res.render('index', { title: 'Welcome to my Header-Parser API' });
=======
  res.render('index', { title: 'Express' });
>>>>>>> f7a4ab0572720d909352a27c790bdfd5c8108b84
});

module.exports = router;
