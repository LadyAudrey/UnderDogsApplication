function letterCount(phrase) {
  // Write a function that takes a string phrase and returns a
  // dictionary containing counts of how many times every character
  // appears in phrase.
  var letterDict = {};
  for (var i = 0; i < phrase.length - 1; i++) {
    var letter = phrase[i];
    if (letter in letterDict) {
      // I thinkthe issue has to do with adding the keys
      letterDict[letter] += 1;
    } else {
      letterDict[letter] == 1;
    }
  }
  return letterDict;
}

letterCount("I'm a String and I do things sometimes");
