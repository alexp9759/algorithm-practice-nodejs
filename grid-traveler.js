/*
traveling grid problem. given a grid and goal is to start at top left, move only right or down,
reach the bottom right. give how many possible routes there are (no diagonal moves)
 */

/*
* ********************************************************************
* brute-force solution
*
* O(2^n+m)time
* O(n+m)space
*
*/

/*
const gridTraveler = (m, n) => {
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;
    return gridTraveler(m - 1, n) + gridTraveler(m, n - 1);
};

*/

/*
* ********************************************************************
* memoized solution
*
* O(m*n) time
* O(m+n) space
*
*/

/*
const gridTraveler = (m, n, memo={}) => {
    const key = m + ',' + n;
    // are the args in the memo
    if (key in memo) return memo[key];
    if (m === 1 && n === 1) return 1;
    if (m === 0 || n === 0) return 0;

    memo[key] = gridTraveler(m-1, n, memo) + gridTraveler(m, n-1, memo);
    return memo[key];
};
*/

/*
* ********************************************************************
* tabulated solution
* O(m*n) time
* 0(m*n) space
*/

const gridTraveler = (m, n) => {
    const table = Array(m + 1)
        .fill()
        .map(() => Array(n + 1).fill(0));
    table[1][1] = 1;
    for (let i = 0; i <= m; i++) {
        for (let j = 0; j <= n; j++) {
            const current = table[i][j];
            if (j + 1 <= n) table[i][j + 1] += current;
            if (i + 1 <= m) table[i + 1][j] += current;
        }
    }
    return table[m][n];
}

/*
* ********************************************************************
* tests
*/

console.log(gridTraveler(1, 1)); // 1
console.log(gridTraveler(2, 3)); // 1
console.log(gridTraveler(3, 2)); // 1
console.log(gridTraveler(3, 3)); // 1
console.log(gridTraveler(20, 20)); // 1
