/*
* ********************************************************************
* brute-force solution
*
* O(2^n) time
* O(n) space
*
*/

/*
const fib = (n) => {
    if (n <= 2) return 1;
    return fib(n-1) + fib(n-2);
}
*/

/*
* ********************************************************************
* memoized solution
* O(n) time
* 0(n) space
*/

/*
const fib = (n, memo = {}) => {
    if (n in memo) return memo[n];
    if (n <= 2) return 1;
    memo[n] = fib(n-1, memo) + fib(n-2, memo);
    return memo[n];
};
*/

/*
* ********************************************************************
* tabulated solution
* O(n) time
* 0(n) space
*/

const fib = (n) => {
    const table = Array(n + 1).fill(0);
    table[1] = 1;
    for (let i = 0; i <= n; i++) {
        table[i + 1] += table[i];
        table[i + 2] += table[i];
    }
    return table[n];
};


/*
* ********************************************************************
* tests
*/

console.log(fib(6));
console.log(fib(7));
console.log(fib(8));
console.log(fib(50));

