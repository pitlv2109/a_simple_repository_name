var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var schoolsSchema = new Schema ({
    name: String,
    banner: String,
    abbr: String,
    posts: Array
});

mongoose.model('schools', schoolsSchema);
