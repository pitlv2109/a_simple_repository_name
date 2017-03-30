var express = require('express');
var queries = require('./public/js/queries.js');
var path = require('path');
var index_router = require('./routes/index.js');
var hbs = require('express-handlebars');

var app = express()

// View engine setup
app.engine('hbs', hbs({extname: 'hbs', defaultLayout: 'layout', layoutsDir: __dirname + '/views/layouts'}));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

// Static folders
app.use(express.static('./public'));
app.use(express.static('./dependencies'));
app.use(express.static('./data'));

app.use(index_router);

app.listen(3000, function () {
  console.log('App listening on port 3000!')
});
