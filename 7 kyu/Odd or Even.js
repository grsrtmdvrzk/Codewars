// TASK
//     Given a list of integers, determine whether the sum of its elements is odd or even.
//
//     Give your answer as a string matching "odd" or "even".
//
//     If the input array is empty consider it as: [0] (array with a zero).
//
//     Examples
//         Input: [0]
//         Output: "even"
//
//         Input: [0, 1, 4]
//         Output: "odd"
//
//         Input: [0, -1, -5]
//         Output: "even"
//
//     Have fun!

// SOLUTION
function oddOrEven(array) {
    if (array === '') {
        array = [0];
    }

    let sumOfElements = 0;

    for (let i = 0; i < array.length; i++) {
        sumOfElements += array[i];
    }

    if (sumOfElements % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }
}