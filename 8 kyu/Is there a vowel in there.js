// TASK
//     Given an array of numbers, check if any of the numbers are the character codes for lower case vowels (a, e, i, o,
//     u).
//
//     If they are, change the array value to a string of that vowel.
//
//     input [100,100,116,105,117,121]=>[100,100,116,"i","u",121] output Return the resulting array.

// SOLUTION
function isVow(a){
    let result = [];

    for (let i = 0; i < a.length; i++) {
        if (a[i] === 97 || a[i] === 101  || a[i] === 105 || a[i] === 111 || a[i] === 117) {
            switch (a[i]) {
                case 97:
                    result.push("a");
                    break;
                case 101:
                    result.push("e");
                    break;
                case 105:
                    result.push("i");
                    break;
                case 111:
                    result.push("o");
                    break;
                case 117:
                    result.push("u");
                    break;
            }
        } else {
            result.push(a[i]);
        }
    }
    return result;
}