const numArray = [1, 2, [3, 10, [11, 12]], [1, 2, [3, 4]], 5, 6];

function flattenArray(numArray) {
  let intialArray = [];

  return numArray.reduce((newArry, currVal) => {
    if (Array.isArray(currVal)) {
      return newArry.concat(flattenArray(currVal));
    } else {
      return newArry.concat(currVal);
    }
  }, intialArray);
}

console.log(flattenArray(numArray));
