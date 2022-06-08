// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

function XO(str) {
    let qtX = 0;
    let qtO = 0;
    str.toLowerCase().split("").map(item => {
        item === "x" ? qtX++ : item === "o" ? qtO++ : null
    })

    return qtX === qtO
}

console.log(XO("XXoo"))

