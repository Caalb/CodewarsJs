// Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

function solution(str, ending){
    const tamanho = str.length - ending.length
    const splitedStr = str.split("")
    const splitedEnd = ending.split("")
    let res1 = []
    let res2 = []
    for(let i = tamanho; i < str.length; i++ ) {
        res1.push(splitedStr[i])
    }

    for(let i = 0; i < ending.length; i++) {
        res2.push(splitedEnd[i])
    }

    return res1.every((value, index) => value === res2[index])
}

let str = 'abcde'
let end = 'cde'

console.log(solution(str, end));

function solution2(str, ending) {
    return str.endsWith(ending)
}