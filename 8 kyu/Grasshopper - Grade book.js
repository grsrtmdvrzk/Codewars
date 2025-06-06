// TASK
//     Complete the function so that it finds the average of the three scores passed to it and returns the letter value
//     associated with that grade.
//
//     Examples
//         Numerical Score        Letter Grade
//         90 <= score <= 100     'A'
//         80 <= score <= 90      'B'
//         70 <= score <= 80      'C'
//         60 <= score <= 70      'D'
//         0 <= score <= 60       'F'
//
//     Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than
//     100.

// SOLUTION
function getGrade(s1, s2, s3) {
    averageGrade = (s1 + s2 + s3) / 3;
    if (averageGrade >= 90 && averageGrade <= 100) {
        return 'A';
    } else if (averageGrade >= 80 && averageGrade <= 90) {
        return 'B';
    } else if (averageGrade >= 70 && averageGrade <= 80) {
        return 'C';
    } else if (averageGrade >= 60 && averageGrade <= 70) {
        return 'D';
    } else if (averageGrade >= 0 && averageGrade <= 60) {
        return 'F';
    }
}