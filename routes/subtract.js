var express = require('express');
var router = express.Router();

// var test = 'calculator.js is working';
var nums = [];

// router.get('/', function (req, res) {
//   res.send(req.body);

// console.log('test:', test);
// });

// router.post('/', function (req, res) {
//     console.log('req.body:', req.body);
//     res.send(req.body);
//   });

router.post('/', function (req, res) {
    var subtract = parseInt(req.body.firstNum) - parseInt(req.body.secondNum);
    var diff = subtract.toString();
    console.log('subtract:', subtract);
    console.log('diff:', diff);
    res.send(diff);
  });

module.exports = router;
