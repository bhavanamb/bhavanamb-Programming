//madam -->

let a = "mAdam";
let res;

function palindromeCheck(word) {
  word = word.toLowerCase();
  let i = 0;
  let j = word.length - 1;
  let flag = true;
  while (i < Math.floor(word.length / 2)) {
    if (word[i] != word[j]) {
      flag = false;
    }
    i += 1;
    j -= 1;
  }
  return flag;
}

res = palindromeCheck(a);
console.log(res);

// this can be done using inbuild method, like by reversing the given string and comparing it with original string

console.log(a.toLowerCase() == a.toLowerCase().split("").reverse().join(""));
