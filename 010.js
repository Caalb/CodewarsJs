// It's pretty straightforward. Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.

function removeChar(str) {
    let ultimaLetra = (str.length - 1)
    return str.substr(1, ultimaLetra - 1)
};

function removeChar2(str) {
    return str.slice(1, -1)
}


console.log(removeChar("carlos"))


