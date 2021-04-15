function reverse() {
  let str = "happy";
  console.log(str.split(""));
  str = str.split("").sort((a, b) => {
    return b - a;
  });
  return str.join("");
}

//console.log(reverse());

// 1. Using split, array.reverse, join

function arrayReverse() {
  let str = "beautiful";
  return str.split("").reverse().join("");
}
//console.log(arrayReverse());
// 2. new reverse String using for loop

//No built in functions used  for loop

//recursion by adding first character at end and passing remaining string recursively
function recursiveReverse(str) {
  if (str == "") {
    return "";
  } else {
    let finalStr = recursiveReverse(str.substr(1)) + str[0]; //charAt can be used
    return finalStr;
  }
}
console.log(recursiveReverse("AmazingDay"));
