var express = require('express')

var app = express()

app.use(express.static('./public'))

app.get('/', function(req, res) {
    res.sendFile(__dirname + '/templates/index.html');
})

app.get('/:school', function(req, res) {
    res.send('You requested school ' + req.params.school)
})

app.listen(3000, function () {
  console.log('App listening on port 3000!')
})
