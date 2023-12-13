function isPrime(num) {
    if (num <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return true;
  }

  function primeCalculate(num) {
    let sum = 0
    for (let i = 2; i <= num; i++) {
        if (isPrime(i)) {
            sum += i
        }
    }
    return sum
  }

  console.log(primeCalculate(10)) //For n = 10, the sum of prime numbers up to 10 is 2 + 3 + 5 + 7 = 17.