function generateFibonacci(n) {
    let fibonacci = [0, 1];
    let i = 2;
    
    while (true) {
      let nextNum = fibonacci[i - 1] + fibonacci[i - 2];
      if (nextNum <= n) {
        fibonacci.push(nextNum);
        i++;
      } else {
        break;
      }
    }
    
    return fibonacci;
  }
  
  // Test cases
  console.log(generateFibonacci(10)); // [0, 1, 1, 2, 3, 5, 8]
  console.log(generateFibonacci(20)); // [0, 1, 1, 2, 3, 5, 8, 13]
  console.log(generateFibonacci(1)); // [0, 1, 1]
  