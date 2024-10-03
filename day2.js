/* is prime
Write a function, isPrime, that takes in a number as an argument. The function should return a boolean indicating whether or not the given number is prime.

A prime number is a number that is only divisible by two distinct numbers: 1 and itself.

For example, 7 is a prime because it is only divisible by 1 and 7. For example, 6 is not a prime because it is divisible by 1, 2, 3, and 6.

You can assume that the input number is a positive integer. */

const isPrime = (n) => {
    if(n == 1) return false;
    
    for(i = 2; i < n-1; i++){
      if(n%i == 0) return false
    }
    return true
  };