/*
    write canConstruct(target, wordBank), takes in target string and array of strings as args
    return a bool for if target can be constructed by concatenating elements of wordBank array
    wordBank elements can be reused
 */
/*
* ********************************************************************
* brute-force solution
*
* time O(n^m * m)
* space O(m^2)
*/

/*
const canConstruct = (target, wordBank) => {
    if (target === '') {
        return true;
    }

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            if (canConstruct(suffix, wordBank) === true) {
                return true;
            }
        }
    }

    return false;
};
*/

/*
* ********************************************************************
* memoized solution
* time O(n*m^2)
* space O(m^2)
*/

/*
const canConstruct = (target, wordBank, memo={}) => {
    if (target in memo) return memo[target]
    if (target === '') {
        return true;
    }

    for (let word of wordBank) {
        if (target.indexOf(word) === 0) {
            const suffix = target.slice(word.length);
            if (canConstruct(suffix, wordBank, memo) === true) {
                memo[target] = true;
                return true;
            }
        }
    }

    memo[target] = false;
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
* O(m^2 * n) time
* O(m^2) space
*
 */

const canConstruct = (target, wordBank) => {
    const table = Array(target.length + 1).fill(false);
    table[0] = true;

    for (let i = 0; i <= target.length; i++) {
        if (table[i] === true) {
            for (let word of wordBank) {
                // if word matches characters starting at i
                if (target.slice(i, i + word.length) === word) {
                    table[i + word.length] = true;
                }
            }
        }
    }

    return table[target.length]
}

/*
* ********************************************************************
* tests
*/

console.log(canConstruct('abcdef', ['ab', 'abc', 'cd', 'def', 'abcd'])) //true
console.log(canConstruct('skateboard', ['bo', 'rd', 'ate', 't', 'ska', 'sk', 'boar'])); //false
console.log(canConstruct('enterapotentpot', ['a', 'p', 'ent', 'enter', 'ot', 'o','t'])); //true
console.log(canConstruct("eeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeeef", [
    'e',
    'ee',
    'eee',
    'eeee',
    'eeeee',
    'eeeeee'
])); //false
