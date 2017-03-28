var readline = require('readline');
var fs = require('fs');
var queries = require('./../../models/queries');

// Script to write school names from the db to a file
// File will be used for the autocomplete search bar
queries.get_all_schools(function(schools) {
    logger = fs.createWriteStream("../../data/school_names.txt");
    for(i = 0; i < schools.length; i++) {
        // console.log(schools[i]);
        logger.write(schools[i] + "\n");
    }
    console.log("Finished writing to school_name.txt");
    return;
});
