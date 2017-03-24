var express = require('express');
var queries = require('../models/queries.js');
var path = require('path');

var router = express.Router();

router.route('/')
    .get(function(req, res) {
        res.sendFile(path.resolve('views/index.html'));
    });

router.route('/signup')
    .get(function(req, res) {
        res.sendFile(path.resolve('views/signup.html'));
    })

    .post(function(req, res) {
        res.send("Will handle signup latter");
    })

router.route('/signin')
    .get(function(req, res) {
        res.sendFile(path.resolve('views/signin.html'));
    })

    .post(function(req, res) {
        res.send("Will handle signin latter");
    })

router.route('/:school')
    .get(function(req, res) {
        res.send('You requested ' + req.params.school)
    })

    .post(function(req, res) {
        res.send("Will handle school latter");
    })

module.exports = router;
