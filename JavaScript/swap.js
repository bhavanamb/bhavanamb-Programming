//swapping variables without creating a temp

//1. Destructuring assignmet
function destructureSwap() {
  let a = 1;
  let b = 2;

  console.log("before swap:");
  console.log("a value:" + a);
  console.log("b value:" + b);
  [a, b] = [b, a];
  console.log("After swap:");
  console.log("a value:" + a);
  console.log("b value:" + b);
}

//destructureSwap();

//swaping with addition and difference

//a-b --> -1    a+b --> 3

function sumDiff() {
  let a = 4;
  let b = 5;

  console.log("before swap:");
  console.log("a value:" + a);
  console.log("b value:" + b);

  a = a - b;
  b = b + a;
  a = b - a;

  console.log("After swap:");
  console.log("a value:" + a);
  console.log("b value:" + b);
}
sumDiff();

function xor() {
  let a = 1;
  let b = 2;

  a = a ^ b;
  b = a ^ b;
  a = a ^ b;

  console.log(a);
  console.log(b);
}
