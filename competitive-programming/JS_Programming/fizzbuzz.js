//1 to 10 i%3 -->fiz and id its i%5 - buzz
let resp;
const fizzbuzz = (numb) => {
  arr = [];
  for (let i = 1; i <= numb; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
      arr.push("fizzbuzz");
    } else if (i % 3 == 0) {
      arr.push("fizz");
    } else if (i % 5 == 0) {
      arr.push("buzz");
    } else {
      arr.push(i);
    }
  }
  return arr;
};

resp = fizzbuzz(15);

for (let j of resp) {
  console.log(j);
}
