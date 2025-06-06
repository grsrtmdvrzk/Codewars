// TASK
//     Given a string, you have to return a string in which each character (case-sensitive) is repeated once.
//
//     Examples
//         * "String"      -> "SSttrriinngg"
//         * "Hello World" -> "HHeelllloo  WWoorrlldd"
//         * "1234!_ "     -> "11223344!!__  "
//
//     Good Luck!

// SOLUTION
function doubleChar(str) {
    resultString = '';
    for (let i = 0; i < str.length; i++) {
        resultString = `${resultString}${str[i]}${str[i]}`;
    }
    return resultString;
}