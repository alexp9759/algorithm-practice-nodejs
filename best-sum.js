/*
    write bestSum(targetSum, numbers), takes in targetSum and array of numbers as args

    return an array containing the shortest combination of numbers that add to the targetSum

    if there is a tie, any of the shortest combos can be returned

 */

/*
* ********************************************************************
* brute-force solution
*
* m = targetSum
* n = numbers.length
* time: O(n^m * m)
* space: O(m^2)
*/

/*
const bestSum = (targetSum, numbers) => {
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let shortestCombination = null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderCombination = bestSum(remainder, numbers);
        if (remainderCombination !== null) {
            const combination = [ ...remainderCombination, num ];
            // if combination is shorter than current shortest, need to update
            if (shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }

    return shortestCombination;
};
*/

/*
* ********************************************************************
* memoized solution
*/

// m = targetSum
// n = numbers.length

// time: O(m^2 * n)
// space: O(m^2)

/*
const bestSum = (targetSum, numbers, memo={}) => {
    if (targetSum in memo) return memo[targetSum];
    if (targetSum === 0) return [];
    if (targetSum < 0) return null;

    let shortestCombination = null;

    for (let num of numbers) {
        const remainder = targetSum - num;
        const remainderCombination = bestSum(remainder, numbers, memo);
        if (remainderCombination !== null) {
            const combination = [ ...remainderCombination, num ];
            // if combination is shorter than current shortest, need to update
            if (shortestCombination === null || combination.length < shortestCombination.length) {
                shortestCombination = combination;
            }
        }
    }

    memo[targetSum] = shortestCombination;
    return shortestCombination;
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

const bestSum = (targetSum, numbers) => {

    const table = Array(targetSum + 1).fill(null);
    table[0] = [];

    for (let i = 0; i <= targetSum; i++) {
        if (table[i] !== null) {
            for (let num of numbers) {
                const combination = [ ...table[i], num ];
                // if current combination is shorter than one already there
                if (!table[i + num] || table[i + num].length > combination.length) {
                    table[i + num] = combination;
                }
            }
        }
    }

    return table[targetSum];
};

/*
* ********************************************************************
* tests
*/

console.log(bestSum(7, [5, 3, 4, 7])); // [7]
console.log(bestSum(8, [2, 3, 5])); // [3, 5]
console.log(bestSum(8, [1, 4, 5])); // [4, 4]
console.log(bestSum(100, [1, 2, 5, 25])); // [25, 25, 25, 25]