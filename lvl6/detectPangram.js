// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

var string = "The quick brown fox jumps over the lazy dog."
var string2 = "This is not a pangram."

// I will split the string to all lower case.
// I will make an empty array.
// I will push the letter into the array IF it isn't already in the array.
// Now I will have an array of the indiviual letters.
// if that array is equal to 26 it will pass the test.


function isPangram(string){
  let arr = string.toLowerCase().split(' ').join('').split('')
  let newArr = []
  arr.forEach((letter) => {
    if (newArr.includes(letter)) {

    } else {
      newArr.push(letter)
    }
  })
  let finalAnswer = false;
  if (newArr.length >= 26) {
    finalAnswer = true;
  }
  return finalAnswer;
}

console.log(isPangram(string2))