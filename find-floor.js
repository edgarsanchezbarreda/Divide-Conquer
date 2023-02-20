// Write a function called findFloor which accepts a sorted array and a value x, and returns the floor of x in the array. The floor of x in an array is the largest element in the array which is smaller than or equal to x. If the floor does not exist, return -1.

// Examples:

// findFloor([1,2,8,10,10,12,19], 9) // 8
// findFloor([1,2,8,10,10,12,19], 20) // 19
// findFloor([1,2,8,10,10,12,19], 0) // -1

const findFloor = (arr, num) => {
    let left = 0;
    let right = arr.length - 1;

    while (left <= right) {
        let middleIdx = Math.floor((left + right) / 2);
        let middleVal = arr[middleIdx];

        if (
            (middleVal < num && arr[middleIdx + 1] > num) ||
            (arr[arr.length - 1] === middleVal && middleVal < num)
        ) {
            return middleVal;
        } else if (middleVal < num) {
            left = middleIdx + 1;
        } else if (middleVal > num) {
            right = middleIdx - 1;
        } else {
            return arr[middleIdx - 1];
        }
    }
    return -1;
};

module.exports = findFloor;
