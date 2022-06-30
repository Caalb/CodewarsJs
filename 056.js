function alphabetPosition(text) {
    const arr = text.toLowerCase().split("").map(i => {
        if(i.charCodeAt() >= 97 && i.charCodeAt() <= 122) {
            return i.charCodeAt() - 96
        } else return ''
    })

    return arr.filter(i => i !== '').join(' ')
}

   
const string = "The sunset sets at twelve o' clock."

// 20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11
// 97 a 122
console.log('z'.charCodeAt())
console.log(alphabetPosition(string))
