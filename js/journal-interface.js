var Entry = require('./../js/entry.js').entryModule;

$(document).ready(function() {
  $("#journal").submit(function(event) {
    event.preventDefault();
    debugger;
    var title = $("#title").val();
    var content = $("#entry").val();
    var currentEntry = new Entry(title, content);
    var output = currentEntry.wordCount(content);
    $("#output").append( output);

  });
});
