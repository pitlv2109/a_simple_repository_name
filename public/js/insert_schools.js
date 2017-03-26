var readline = require('readline');
var fs = require('fs');
var queries = require('./../../models/queries');

const rl = readline.createInterface({
    input: fs.createReadStream('./../../py_scripts/schools_info.txt')
});

var count = 0;
var abbr = "";
var name = "";

rl.on('line', function (line) {
    if (count == 0) {
        name = line;
    }
    else if (count == 1) {
        abbr = line;
        count = -1;
        queries.create_new_school(name, "", abbr);
    }
    count++;
});
