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
