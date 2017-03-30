var express = require('express')
var queries = require('./public/js/queries.js')
var index_router = require('./routes/index.js')

var app = express()

app.use(express.static('./public'))
app.use(express.static('./dependencies'))
app.use(express.static('./data'))

app.use(index_router);

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})
