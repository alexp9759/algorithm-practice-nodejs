/*
* write function allConstruct(target, wordBank), accepts target string and array of strings
* function returns a 2D array with all the ways to construct target from wordBank strings, each
* element should list a combination to construct the target
*
* wordBank elements can be reused
*
* allConstruct(purple, [ purp, p, ur, le, purpl ] ->
* [
*   [ purp, le ],
*   [ p, ur, p, le ]
* ]
*
*/

/*
* ***********************************************************
* brute-force
*
* m = target.length
* n = wordBank.length
*
* time O(n^m)
* space O(m)
*/
/*
const allConstruct = (target, wordBank) => {
    if (target === '') return [[]];

    const result = [];

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const suffixWays = allConstruct(suffix, wordBank);
            const targetWays = suffixWays.map(way => [ word, ...way]);
            result.push(...targetWays);
        }
    }

    return result;
};
 */

/*
* ********************************************************************
* memoized
*
* time O(n^m)
* space O(m)
*
*/
const allConstruct = (target, wordBank, memo={}) => {
    if (target in memo) return memo[target];
    if (target === '') return [[]];

    const result = [];

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            const suffixWays = allConstruct(suffix, wordBank, memo);
            const targetWays = suffixWays.map(way => [ word, ...way]);
            result.push(...targetWays);
        }
    }

    memo[target] = result;
    return result;
};

/*
* ********************************************************************
* tests
*/
console.log(allConstruct('purple', ['purp', 'p', 'ur', 'le', 'purpl']));
console.log(allConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd', 'ef', 'c']));
console.log(allConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar']));
console.log(allConstruct("aaaaaaaaaaaaaaaaaaaaaz", [ 'a', 'aa', 'aaa', 'aaaa', 'aaaaa']));