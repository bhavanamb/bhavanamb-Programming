// using recursion
function fibo(n) {
  if (n == 0) {
    return 0;
  } else if (n == 1) {
    return 1;
  } else {
    return fibo(n - 1) + fibo(n - 2);
  }
}

//5 - 4,3 4-3,2

//nth entry in series

//5th number - 0 1 1 2 3

function fibon(n) {
  let a = 0;
  let b = 1;
  let i = 2;
  while (i < n) {
    temp = a + b;
    a = b;
    b = temp;
    i += 1;
  }
  return b;
}

console.log(fibo(5));
