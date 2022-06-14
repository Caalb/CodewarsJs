// Create a function that returns the sum of the two lowest positive numbers given an array of minimum 4 positive integers. No floats or non-positive integers will be passed.

// For example, when an array is passed like [19, 5, 42, 2, 77], the output should be 7.

// [10, 343445353, 3453445, 3453545353453] should return 3453455.

function sumTwoSmallestNumbers(numbers) {  
    const firstSmallNumber = Math.min(...numbers)
    const arrFilter = numbers.filter(i => i !== firstSmallNumber) 
    const secondSmallNumber = Math.min(...arrFilter)
    return secondSmallNumber + firstSmallNumber
}

const simplified = (numbers) => {
    const sort = numbers.sort((a, b) => a - b)
    return numbers[0] + numbers[1]
}

const arr = [15, 28, 4, 2, 43];
console.log(simplified(arr))