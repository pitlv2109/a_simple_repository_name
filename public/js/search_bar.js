function get_school_names() {
    var schools = [];

    // Get JSON file
    $.getJSON("school_names.json", function(json) {
        for(i = 0; i < json.schools.length; i++) {
            // Append each school name to the schools array
            // Ready for autocomplete search bar
            schools.push(json.schools[i].name);
        }
    })
    return schools;
}

$(document).ready(function($) {
    var schools = get_school_names();
    // Workaround for bug in mouse item selection
    $.fn.typeahead.Constructor.prototype.blur = function() {
        var that = this;
        setTimeout(function () { that.hide() }, 250);
    };

    $('#search-bar-input').typeahead({
        source: function(query, process) {
            // Return array of school names for autocomplete search bar
            return schools;
        }
    });
})
