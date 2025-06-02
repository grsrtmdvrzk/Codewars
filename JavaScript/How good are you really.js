// TASK
//     There was a test in your class and you passed it. Congratulations!
//     But you're an ambitious person. You want to know if you're better than the average student in your class.
//     You receive an array with your peers' test scores. Now calculate the average and compare your score!
//     Return true if you're better, else false!
//
//     Notes
//         Your points are not included in the array of your class's points. Do not forget them when calculating the
//         average score!

// SOLUTION
function betterThanAverage(classPoints, yourPoints) {
    getAverage = (classPoints) => {
        let sum = 0;

        for (let i = 0; i < classPoints.length; i += 1) {
            sum += classPoints[i];
        }

        return (sum + yourPoints) / (classPoints.length + 1);
    }

    if (yourPoints > getAverage(classPoints)) {
        return true;
    } else {
        return false;
    }
}