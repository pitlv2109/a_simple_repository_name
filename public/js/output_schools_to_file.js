var readline = require('readline');
var fs = require('fs');
var queries = require('./../../models/queries');

// Script to write school names from the db to a file
// File will be used for the autocomplete search bar
queries.get_all_schools(function(schools) {
    // logger = fs.createWriteStream("../../data/school_names.json");
    var school_obj = {
        schools: []
    };
    for(i = 0; i < schools.length; i++) {
        // logger.write(schools[i] + "\n");
        school_obj.schools.push({
            name: schools[i],
            abbr: schools[++i]
        });
    }

    var json = JSON.stringify(school_obj);

    fs.writeFile("../../data/school_names.json", json, "utf8", function(){})
    console.log("Finished writing to school_name.txt");
    return;
});
