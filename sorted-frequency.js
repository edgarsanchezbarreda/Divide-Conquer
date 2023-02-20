// Given a sorted array and a number, write a function called sortedFrequency that counts the occurrences of the number in the array

// Constraints:

// Time Complexity: O(log N)

// Examples:

// sortedFrequency([1,1,2,2,2,2,3],2) // 4
// sortedFrequency([1,1,2,2,2,2,3],3) // 1
// sortedFrequency([1,1,2,2,2,2,3],1) // 2
// sortedFrequency([1,1,2,2,2,2,3],4) // -1

const sortedFrequency = (arr, target) => {
    let firstTargetValue = findFirst(arr, target);

    if (firstTargetValue === -1) return firstTargetValue;

    let lastTargetValue = findLast(arr, target);

    return lastTargetValue - firstTargetValue + 1;
};

// Finds first instance of target value
const findFirst = (arr, target, left = 0, right = arr.length - 1) => {
    if (right >= left) {
        let middle = Math.floor((right + left) / 2);
        if (
            (middle === 0 || target > arr[middle - 1]) &&
            arr[middle] === target
        ) {
            return middle;
        } else if (target > arr[middle]) {
            return findFirst(arr, target, middle + 1, right);
        } else {
            return findFirst(arr, target, left, middle - 1);
        }
    }
    return -1;
};

// Finds last instance of target value
const findLast = (arr, target, left = 0, right = arr.length - 1) => {
    if (right >= left) {
        let middle = Math.floor((left + right) / 2);
        if (
            (middle === arr.length - 1 || target < arr[middle + 1]) &&
            arr[middle] === target
        ) {
            return middle;
        } else if (target < arr[middle]) {
            return findLast(arr, target, left, middle - 1);
        } else {
            return findLast(arr, target, middle + 1, right);
        }
    }
    return -1;
};

module.exports = sortedFrequency;
