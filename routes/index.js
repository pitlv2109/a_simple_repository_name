var express = require('express');
var queries = require('../models/queries.js');
var path = require('path');

var router = express.Router();

router.get('/', function(req, res) {
    res.sendFile(path.resolve('views/index.html'));
})

router.get('/signup', function(req, res) {
    res.sendFile(path.resolve('views/signup.html'));
})

router.get('/signin', function(req, res) {
    res.sendFile(path.resolve('views/signin.html'));
})

router.get('/:school', function(req, res) {
    res.send('You requested ' + req.params.school)
})

module.exports = router;
