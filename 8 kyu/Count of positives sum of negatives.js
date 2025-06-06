// TASK
//     Given an array of integers.
//
//     Return an array, where the first element is the count of positives numbers and the second element is sum of
//     negative numbers. 0 is neither positive nor negative.
//
//     If the input is an empty array or is null, return an empty array.
//
//     Examples
//         For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65].

// SOLUTION
function countPositivesSumNegatives(input) {
    let result = [];
    let positiveNumbersCount = 0;
    let negativeNumbersSum = 0;

    if (input === null || input.length === 0) {
        return [];
    } else {
        for (let i = 0; i < input.length; i++) {
            if (input[i] > 0) {
                positiveNumbersCount++;
            } else if (input[i] < 0) {
                negativeNumbersSum += input[i];
            }
        }
    }
    result.push(positiveNumbersCount);
    result.push(negativeNumbersSum);
    return result;
}