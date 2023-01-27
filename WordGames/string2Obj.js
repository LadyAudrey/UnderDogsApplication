const howManyTimes = function (phrase) {
  const letterObjectCounting = new Object();
  for (let i = 0; i < phrase.length; i++) {
    let letter = phrase[i];
    if (!letterObjectCounting[letter]) {
      letterObjectCounting[letter] = 1;
    } else {
      letterObjectCounting[letter] += 1;
    }
  }
  return letterObjectCounting;
};

console.log(howManyTimes("Today is Sunday"));
