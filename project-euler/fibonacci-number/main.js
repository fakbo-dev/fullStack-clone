function sumOfEvenFibonacci(limit) {
    let fib = [1, 2];
    let sum = 2; // Start with 2 because the second term is even
  
    let i = 2;
    while (fib[i - 1] + fib[i - 2] <= limit) {
      fib[i] = fib[i - 1] + fib[i - 2];
      if (fib[i] % 2 === 0) {
        sum += fib[i];
      }
      i++;
    }
  
    return sum;
  }
  
  const limit = 4000000;
  const result = sumOfEvenFibonacci(limit);
  console.log(result);
  














    // let previous = 0;
    // let current = 1;
    // let sum = 0;
    // let next;
    // const even = 4000000;

    // for (current; current < even; current++) {
    //     next = current + previous;
    //     previous = current;

    //     if (current % 2 === 0) {
    //         sum += current;
    //     }

    //     current = next;
    // }
    
    // console.log(sum)


