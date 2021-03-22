//spread operator
function spreadOperator(arr1, arr2) {
  return [...arr1, ...arr2].filter((e, i, arr) => {
    return arr.indexOf(e) == i;
  });
}

//using concat function
function concatMethod(arr1, arr2) {
  return arr1.concat(arr2);
}

//using reduce function
function reduceMethod(arr1, arr2) {
  var arr3 = arr2.reduce((newArray, e) => {
    return newArray.concat(e);
  }, arr1);
  return arr3;
}

arr1 = [4, 6, 7, 8];
arr2 = [2, 3, 6, 9];

console.log(reduceMethod(arr1, arr2));
