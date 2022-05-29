// A Narcissistic Number is a number of length l in which the sum of its digits to the power of l is equal to the original number. If this seems confusing, refer to the example below.

// Ex: 153, where l = 3 ( the number of digits in 153 )
// 13 + 53 + 33 = 153

// Write a function that, given n, returns whether or not n is a Narcissistic Number.

function isNarcissistic(n) {
    let soma = 0
    let arr = n.toString().split('')
    let length = arr.length
    if(length === 1) return true
    arr.map(item => soma += Math.pow(item, length))
    return (soma === n)
}

function isNarcissistic2(n) {
    return n.toString().split('').reduce((acc, item, index, arr) => acc += Math.pow(item, arr.length), 0)
}

console.log(isNarcissistic2(370))