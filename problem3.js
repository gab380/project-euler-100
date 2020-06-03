function largestPrimeFactor(number) {
  let lastPrimeFactor = 2;

  while (number !== 1) {
    if (number % lastPrimeFactor === 0) {
      number = number / lastPrimeFactor;
    } else {
      lastPrimeFactor = findNextPrime(lastPrimeFactor);
    }
  }

  return lastPrimeFactor;
}

function isPrime(number) {
  let divider = 2;
  let isPrime = true;

  while (divider < number && isPrime === true) {
    if (number % divider === 0) {
      isPrime = false;
    }
    divider++;
  }

  return isPrime;
}

function findNextPrime(number) {
  if (number === 1) {
    return 2;
  }

  let nextNum = number + 1;

  while (!isPrime(nextNum)) {
    nextNum++;
  }

  return nextNum;
}

console.log(largestPrimeFactor(600851475143));
