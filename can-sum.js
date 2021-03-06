/* canSum(targetSum, numbers) takes in a targetSum and an array of numbers as args.
   should return a bool indicating if it's possible to generate the targetSum from numbers
   in the array.
   elements in array can be used as many times as needed
   all inputs are non negative
 */

/*
* ********************************************************************
* brute-force solution
*
* O(n^m) time
* O(m) space
*
*/

/*
const canSum = (targetSum, numbers) => {
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (let num of numbers) {
        const remainder = targetSum - num;
        if (canSum(remainder, numbers) === true) {
            return true;
        }
    }

    return false;
};

*/

/*
* =========================================================================
* memoized
*
* O(m*n) time
* O(m) space
*
 */

/*
const canSum = (targetSum, numbers, memo={}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return true;
    if (targetSum < 0) return false;

    for (let num of numbers) {
        const remainder = targetSum - num;
        if (canSum(remainder, numbers, memo) === true) {
            memo[targetSum] = true;
            return true;
        }
    }

    memo[targetSum] = false;
    return false;
};
 */

/*
* =========================================================================
* tabulated
*
* m=targetSum
* n=numbers.length
*
* O(m*n) time
* O(m) space
*
 */

const canSum = (targetSum, numbers) => {

    const table = Array(targetSum + 1).fill(false);
    table[0] = true;
    for(let i = 0; i <= targetSum; i++) {
        if (table[i] === true) {
            for (let num of numbers) {
                table[i + num] = true;
            }
        }
    }

    return table[targetSum];
}

/*
* ********************************************************************
* tests
*/

console.log(canSum(7, [2, 3]));
console.log(canSum(7, [5, 3, 4, 7]));
console.log(canSum(7, [2, 4]));
console.log(canSum(8, [2, 3, 5]));
console.log(canSum(300, [7, 14]));

