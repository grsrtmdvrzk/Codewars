// TASK
//     Given an array of integers, return a new array with each value doubled.
//
//     Examples
//         [1, 2, 3] --> [2, 4, 6]

// SOLUTION
function maps(x){
    let result = [];
    for (let i = 0; i < x.length; i++) {
        result.push(x[i] * 2);
    }
    return result;
}