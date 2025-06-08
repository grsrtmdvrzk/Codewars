// TASK
//     Simple, given a string of words, return the length of the shortest word(s).
//
//     String will never be empty and you do not need to account for different data types.

// SOLUTION
function findShort(s){
    let wordsMassive = s.split(' ');
    let shortestWord = wordsMassive[0];
    for (let i = 0; i < wordsMassive.length; i++) {
        if (wordsMassive[i].length < shortestWord.length) {
            shortestWord = wordsMassive[i];
        }
    }
    return shortestWord.length;
}