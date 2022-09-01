// Given a string, you have to return a string in which each character (case-sensitive) is repeated once.

// Examples (Input -> Output):
// * "String"      -> "SSttrriinngg"
// * "Hello World" -> "HHeelllloo  WWoorrlldd"
// * "1234!_ "     -> "11223344!!__  "
// Good Luck!

function doubleChar(str) {
    let result = [];
    str.split("").map((e, i) => e !== i - 1 ? result.push(e, e) : null)

    return result.join("")
}
  
const str = "String";
console.log(doubleChar(str))