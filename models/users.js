var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var usersSchema = new Schema ({
    username: String,
    type: Number,
    score: Number,
    posts: Array
});

mongoose.model('users', usersSchema);
