// TASK
//     Complete the solution so that it reverses the string passed into it.
//
//     Examples
//         'world'  =>  'dlrow'
//         'word'   =>  'drow'

// SOLUTION
function solution(str){
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }
    return reversed;
}