function fiboEvenSum(n) {
  let num1 = 1;
  let num2 = 2;
  let sum = 0;

  while (num2 < n) {
    if (num2 % 2 === 0) {
      sum += num2;
    }

    let aux = num2;
    num2 = num1 + num2;
    num1 = aux;
  }

  return sum;
}

fiboEvenSum(10);
