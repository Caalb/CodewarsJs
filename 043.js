// Complete the solution so that the function will break up camel casing, using a space between words.

const solution = string => {
    let splited = string.split("")
    let indexs = []
    splited.map((char, i) => {
        if(char === char.toUpperCase()) {
            indexs.push(i)
        }
    })
    for(let i = 0; i < string.length; i++) {
        splited[indexs[i]] = ` ${splited[indexs[i]]}`
    }
    return splited.join("")
}

let input = "camelCasIng"

console.log(solution(input))

console.log("c" === "C")

// for(let j = 0; j < string.length; j++) {
        //     if(char === splited[j]) {
        //         console.log("Ta rodado")
        //     }
        // }