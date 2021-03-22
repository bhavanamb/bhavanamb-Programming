function checkPrime(n) {
  var flag = 0;
  if (n == 2 || n == 1) {
    flag = 0;
  }
  for (let i = 2; i <= n; i++) {
    if (n % i == 0) {
      flag = 1;
      break;
    }
  }
  if (flag == 1) {
    console.log("Composite");
  } else {
    console.log("Prime");
  }
}

checkPrime(123);
