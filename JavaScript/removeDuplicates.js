//set
function setRemoveDuplicates() {
  let arr = [4, 2, 7, 2, 1, 5, 1];

  arr = [...new Set(arr)];

  console.log(arr);
}

//using filter and indexOf

function filterRemoveDuplicates() {
  let arr = [4, 2, 7, 2, 1, 5, 1];

  arr = arr.filter((currElem, idx, ar) => {
    return ar.indexOf(currElem) == idx;
  });

  return arr;
}

//console.log(filterRemoveDuplicates());

// forEach and includes

function forEachRemoveDuplicates() {
  let newArr = [];
  let arr = [4, 2, 7, 2, 1, 5, 1];
  arr.forEach((currElem) => {
    if (!newArr.includes(currElem)) {
      newArr.push(currElem);
    }
  });

  return newArr;
}
console.log(forEachRemoveDuplicates());
