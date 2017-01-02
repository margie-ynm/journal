function Entry(title, content) {
  this.title = title;
  this.content = content;
};


Entry.prototype.wordCount = function (content) {
  var count = 0;
  var words = content.split(" ");
    words.forEach(function(word){
     count += 1;
  })
return count;
};

exports.entryModule = Entry;
