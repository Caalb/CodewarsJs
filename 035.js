// Write a funcition to convert a name into initials . This kata strictly takes to words with one space in between them.
// The output should be two capital latters witch a dot separing then.

const abbrevName = (name) => {
    return name.split(" ").map(item =>  item[0]).join(".").toUpperCase()
}

const name2 = "Carlos Alberto"
console.log(abbrevName(name2))