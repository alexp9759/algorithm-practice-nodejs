/*
    write function countConstruct(target, wordBank), accepts target string and array of strings,
    should return number of ways that target can be constructed by concatenating elements of
    wordBank array,
    wordBank elements can be reused
 */

/*
* ***********************************************************
* brute-force
*
* time O(n^m * m)
* space O(m^2)
*/

/*
const countConstruct = (target, wordBank) => {
    if (target === '') return 1;

    let totalCount = 0;

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const numWaysForRest = countConstruct(target.slice(word.length), wordBank);
            totalCount += numWaysForRest;
        }
    }

    return totalCount;
};
*/

/*
* ********************************************************************
* memoized
*
* time O(n * m^2)
* space O(m^2)
*
*/

/*
const countConstruct = (target, wordBank, memo={}) => {
    if (target in memo) return memo[target];
    if (target === '') return 1;

    let totalCount = 0;

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const numWaysForRest = countConstruct(target.slice(word.length), wordBank, memo);
            totalCount += numWaysForRest;
        }
    }

    memo[target] = totalCount;
    return totalCount;
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
* O(m) space
*
 */

const countConstruct = (target, wordBank) => {
    const table = Array(target.length + 1).fill(0);
    table[0] = 1;

    for (let i = 0; i <= target.length; i++) {
        if (table[i] > 0) {
            for (let word of wordBank) {
                if (target.slice(i, i + word.length) === word) {
                    table[i + word.length] += table[i];
                }
            }
        }
    }

    return table[target.length];
}

/*
* ********************************************************************
* tests
*/
console.log(countConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl'])); //2
console.log(countConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])); //1
console.log(countConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); //0
console.log(countConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o','t'])); //4
console.log(countConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee'
])); //0