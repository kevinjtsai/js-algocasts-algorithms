// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
  let dictionary = {};
  let maxChar = 0;
  let maxKey;
  str.split('').forEach((element) => {
    if(dictionary.hasOwnProperty(element)) {
      dictionary[element] += 1;
    } else {
      dictionary[element] = 1;
    }
  });
  for (let key in dictionary) {
    if (dictionary[key] > maxChar) {
      maxChar = dictionary[key];
      maxKey = key;
    }
  }
  return maxKey;
}

module.exports = maxChar;

