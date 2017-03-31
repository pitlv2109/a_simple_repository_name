var express = require('express')
var queries = require('./models/queries.js')
var index_router = require('./routes/index.js')
var passport = require('passport');

var app = express()

app.use(express.static('./public'))
app.use(express.static('./dependencies'))
app.use(express.static('./data'))
app.use(express.static('./bower_components'))

app.use(passport.initialize());
app.use(passport.session());
app.use(index_router);

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})
