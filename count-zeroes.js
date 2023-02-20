// Given an array of 1s and 0s which has all 1s first followed by all 0s, write a function called countZeroes, which returns the number of zeroes in the array.

// Constraints:

// Time Complexity: O(log N)

// Examples:

// countZeroes([1,1,1,1,0,0]) // 2
// countZeroes([1,0,0,0,0]) // 4
// countZeroes([0,0,0]) // 3
// countZeroes([1,1,1,1]) // 0

const countZeroes = arr => {
    let firstZero = findFirst(arr);
    if (firstZero === -1) return 0;

    return arr.length - firstZero;
};

const findFirst = (arr, left = 0, right = arr.length - 1) => {
    if (right >= left) {
        let middle = left + Math.floor((right - left) / 2);
        if ((middle === 0 || arr[middle - 1] === 1) && arr[middle] === 0) {
            return middle;
        } else if (arr[middle] === 1) {
            return findFirst(arr, middle + 1, right);
        }
        return findFirst(arr, left, middle - 1);
    }
    return -1;
};

module.exports = countZeroes;
