$(document).ready(function($) {
    // Workaround for bug in mouse item selection
    $.fn.typeahead.Constructor.prototype.blur = function() {
        var that = this;
        setTimeout(function () { that.hide() }, 250);
    };

    $('#search-bar-input').typeahead({
        source: function(query, process) {
            return ["University of Illinois", "University of Michigan", "MIT"];
        }
    });
})
