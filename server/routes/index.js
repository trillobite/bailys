var express = require('express');
var router = express.Router();
var controller = require('../controllers/myController');
var request = require('request');




/* GET index page. */
router.get('/', function(req, res) {
  res.render('index', { title: "Baily's" });
});



//router.get('/banquets', function (req, res) {
    //res.render('banquets', { title: "Banquets" });
//});
//router.get('/about', function (req, res) {
   // res.render('about', { title: "About" });
//});
//router.get('/about/history', function (req, res) {
   // res.render('history', { title: "History" });
//});

router.get('/users', controller.SendMessage);


module.exports = router; 
