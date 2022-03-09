/*
    take in a set of values, num and array, return a way to add up numbers from array to equal num,
    if multiple ways return any one way, if not possible return null
    can reuse nums in array, nums are positive
 */

/*
* ********************************************************************
* brute-force solution
*
* m = target sum
* n = numbers.length
* time: O(n^m * m)
* space: O(m)
*
*/

/*
const howSum = (targetSum, numbers) => {
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers);
        if (remainderResult !== null) {
            return [ ...remainderResult, num ];
        }
    }

    return null;
};
*/

/*
* ********************************************************************
* memoized solution
*
* m = target sum
* n = numbers.length
*
* time: O(n*m^2)
* space: O(m^2)
*
*/

/*
const howSum = (targetSum, numbers, memo={}) => {
    if (targetSum in memo) return memo[targetSum]
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderResult = howSum(remainder, numbers, memo);
        if (remainderResult !== null) {
            memo[targetSum] = [ ...remainderResult, num ];
            return memo[targetSum];
        }
    }

    memo[targetSum] = null;
    return null;
};
 */

/*
* =========================================================================
* tabulated
*
* m=targetSum
* n=numbers.length
*
* O(m^2 * n) time
* O(m^2) space
*
 */

const howSum = (targetSum, numbers) => {
    const table = Array(targetSum + 1).fill(null);
    table[0] = [];

    for (let i = 0; i <= targetSum; i++) {
        if (table[i] !== null) {
            for (let num of numbers) {
                table[i + num] = [ ...table[i], num ];
            }
        }
    }

    return table[targetSum];
};

/*
* ********************************************************************
* tests
*/

console.log(howSum(7, [2, 3])); // [3, 2, 2]
console.log(howSum(7, [5, 3, 4, 7])); // [4, 3]
console.log(howSum(7, [2, 4])); // null
console.log(howSum(8, [2, 3, 5])); // [2, 2, 2, 2]
console.log(howSum(300, [7, 14])); // null

































