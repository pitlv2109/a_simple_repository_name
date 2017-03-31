var express = require('express')
var queries = require('./models/queries.js')
var index_router = require('./routes/index.js')

var app = express()

app.use(express.static('./public'))
app.use(express.static('./dependencies'))
app.use(express.static('./data'))

app.use(index_router);

//Use Heroku port
app.set('port', (process.env.PORT || 3000));

app.listen(app.get('port'), function() {
  console.log('Node app is running on port', app.get('port'));
});
