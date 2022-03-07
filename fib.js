/* this solution only works for small numbers, need to improve with algorithm
const fib = (n) => {
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}

console.log(fib(5));
console.log(fib(6));
console.log(fib(8));
console.log(fib(50));

O(2^n) time
O(n) space
*/

// memoization
//  js object, keys will be arg to fn, value will be return value

const fib = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fib(n-1, memo) + fib(n-2, memo);
    return memo[n];
};

console.log(fib(5));
console.log(fib(6));
console.log(fib(8));
console.log(fib(50));

/*
O(n) time
0(n) space
*/

