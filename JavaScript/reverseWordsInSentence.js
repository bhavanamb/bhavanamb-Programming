let sentence = "Today is a good day";

function reverseWord(word) {
  return word.split("").reverse().join("");
}

function reverseWordInSent(sentence) {
  let wordArr = sentence.split(" ");
  for (i in wordArr) {
    wordArr[i] = reverseWord(wordArr[i]);
  }

  return wordArr.join(" ");
}

//console.log(reverseWordInSent(sentence));

//without using buit in function

function pureReverse(sentence) {
  let wordList = [];

  let wordCount = sentence.length;

  let wordLen = 0;
  for (let i = wordCount - 1; i >= 0; i--) {
    if (sentence[i] == " " || i == 0) {
      wordList.push(sentence.substr(i, 1 + wordLen));
      wordLen = 0;
    } else if (sentence[i] != " ") {
      wordLen++;
    }
  }
  return wordList.join(" ");
}

//console.log(pureReverse(sentence));

//Inplace reverse

console.log(
  sentence.split(" ").reverse().join(" ").split("").reverse().join("")
);
