// TASK
//     Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending),
//     the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.
//
//     Examples
//         a = "xyaabbbccccdefww"
//         b = "xxxxyyyyabklmopq"
//         longest(a, b) -> "abcdefklmopqwxy"
//
//         a = "abcdefghijklmnopqrstuvwxyz"
//         longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// SOLUTION
function longest(s1, s2) {
    const totalArray = s1 + s2;
    const objectFromTotalArray = new Set(totalArray);
    const uniqueTotalArray = Array.from(objectFromTotalArray);
    return sortedTotalArray = uniqueTotalArray.sort().join('');
}