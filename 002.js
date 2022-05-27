//Write a function which calculates the average of the numbers in a given list
//Note: Empty arrays should return 0.


function find_average(array) {
    let total = 0
    array.map(item => {
        total += item
    })

    if (array.length === 0) {
        return 0
    }

    return (total / array.length)
}

function find_average2(arr) {
    return arr.length === 0 ? 0 : arr.reduce((acc, number) => (acc + number), 0) / arr.length
}

console.log(find_average2([1, 2, 3, 4]))



