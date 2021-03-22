//filter can have two parameter 1. callback function 2. contextObject
function rangeCheck(value) {
  if (typeof value !== "number") {
    return false;
  }
  return value >= this.low && value <= this.high;
}
let numbers = [10, 2, 12, 1, "2344", "wejbjb", 43];

let range = {
  low: 1,
  high: 20,
};

let numberRange = numbers.filter(rangeCheck, range);

console.log(numberRange);
