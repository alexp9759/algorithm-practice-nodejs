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


/*
* ********************************************************************
* tests
*/

console.log(bestSum(7, [5, 3, 4, 7])); // [7]
console.log(bestSum(8, [2, 3, 5])); // [3, 5]
console.log(bestSum(8, [1, 4, 5])); // [4, 4]
console.log(bestSum(100, [1, 2, 5, 25])); // [25, 25, 25, 25]