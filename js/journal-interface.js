var Entry = require('./../js/entry.js').entryModule;

$(document).ready(function() {
  $("#journal").submit(function(event) {
    event.preventDefault();
    var title = $("#title").val();
    var content = $("#entry").val();
    var currentEntry = new Entry(title, content);
    var output = currentEntry.wordCount(content);
    var outputVowels = currentEntry.vowelCount(content);
    var outputConsonants = currentEntry.consonantCount(content);
    $("#output").append("<li>" + output + "</li>");
    $("#output").append("<li>There are " + outputVowels + " vowels</li>");
    $("#output").append("<li>There are " + outputConsonants + " consonants</li>");
  });
});
