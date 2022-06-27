// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

const high = (x) => {
    let result = ''
    let indexResult = 0
    let setCount = 0
    x.split(" ").forEach((palavra, index) => {
        let count = 0
        palavra.split("").forEach(letra => {
            count += letra.charCodeAt() 
        })
        console.log(count)
        if(count > setCount) {
            setCount = count
            indexResult = index
        } 
    })
    return x.split(" ")[indexResult]
}

const string = 'what time are we climbing up the volcano'

let str = 'climbing'
let n = 0
str.split("").map(i => {
    n += i.charCodeAt()
})
console.log(n)
