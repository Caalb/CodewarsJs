// Convert number to reversed array of digits
// Given a random non-negative number, you have to return the digits of this number within an array in reverse order.

function digitize(n) {
    return String(n).split("").map(e => parseInt(e)).reverse()
}

const input = 348597
console.log(digitize(input))