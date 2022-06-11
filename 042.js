// Task
// You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

function sortArray(array) {
    const oddNumbers = array.filter(n => n % 2 !== 0).sort((a , b) => a - b)
    return array.map(x => x % 2 !== 0 ? oddNumbers.shift() : x)
}

console.log(sortArray([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]))