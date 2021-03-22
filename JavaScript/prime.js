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

//checkPrime(123);

function isPrime(n) {
  var flag = 0;
  if (n == 2) {
    return true;
  } else if (n == 1) {
    return false;
  }
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      flag = 1;
      break;
    }
  }
  if (flag == 1) {
    return false;
  } else {
    return true;
  }
}

// prime factors of number
function primeFactor(n) {
  let primeNumbers = [];
  var i = 2;
  while (n > 2) {
    if (isPrime(i) && n % i == 0) {
      if (primeNumbers.indexOf(i) == -1) {
        primeNumbers.push(i);
      }

      n = Math.round(n / i);
    }
    i += 1;
  }

  console.log(primeNumbers);
}

primeFactor(79);
