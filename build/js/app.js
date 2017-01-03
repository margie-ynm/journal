(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
function Entry(title, content) {
  this.title = title;
  this.content = content;
}


Entry.prototype.wordCount = function(content) {
  var count = 0;
  var words = content.split(" ");
    words.forEach(function(word){
     count += 1;
  });
return count;
};

Entry.prototype.vowelCount = function(content) {
  var count = 0;
  var vowels = ["a", "e", "i", "o", "u"];
  var letters = content.split("");
  console.log(letters);
  letters.forEach(function(letter){
    vowels.forEach(function(vowel){
      if (letter === vowel)
      count = count +1;
    });
  });
  return count;
};

Entry.prototype.consonantCount = function(content) {
  var count = 0;
  var consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];
  var letters = content.split("");
  letters.forEach(function(letter) {
    consonants.forEach(function(consonant) {
      if (letter === consonant)
      count += 1;
    });
  });
  return count;
};

Entry.prototype.getTeaser = function(content) {
    var teaser = [];
    var words = content.split(" ");
  for(var i = 1; i <= 8; i++) {
      ;
    teaser.push(words.shift());
    };
  teaser = teaser.join(" ");
  return teaser
};
exports.entryModule = Entry;

},{}],2:[function(require,module,exports){
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
    var outputTeaser = currentEntry.getTeaser(content);
    $("#output").append("<li>" + output + "</li>");
    $("#output").append("<li>There are " + outputVowels + " vowels</li>");
    $("#output").append("<li>There are " + outputConsonants + " consonants</li>");
    $("#output").append("<li>Here's a preview " + "'" + outputTeaser +"'" + " </li>");
  });
});

},{"./../js/entry.js":1}]},{},[2]);
