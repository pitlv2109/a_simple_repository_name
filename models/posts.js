var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var postsSchema = new Schema ({
    school_id: Schema.objectId,
    user_id: Schema.objectId,
    url: String,
    score: Number
});

mongoose.model('posts', postsSchema);
