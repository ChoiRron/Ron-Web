let secretMessage = [
    "Learning",
    "is",
    "not",
    "about",
    "what",
    "you",
    "get",
    "easily",
    "the",
    "first",
    "time,",
    "it",
    "is",
    "about",
    "what",
    "you",
    "can",
    "figure",
    "out.",
    "-2015,",
    "Chris",
    "Pine,",
    "Learn",
  ];
  console.log(secretMessage.length);
  
  secretMessage.push('to', 'program');
  console.log(secretMessage);
  
  const item = secretMessage.shift()
  console.log(item);

  const newItem = secretMessage.unshift("Programing", "or", "Coding");
  console.log(newItem)

  const slice1 = secretMessage.slice(24)
  console.log(slice1);

  const lastelement = slice1[slice1.length - 1];
  console.log(lastelement);

if (lastelement.length > 2) {
  slice1[2] = "UPDATED"
} else {
  slice1.pop()
}
