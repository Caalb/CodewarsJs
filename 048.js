// Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

const moveZeros = (arr) => {
    const valueElements = arr.filter(ele => ele === 0).length
    const result = arr.filter(ele => ele !== 0)
    for(let i = 0; i < valueElements; i++) {
        result.push(0)
    }
    return result
}

const arr = [false,1,0,1,2,0,1,3,"a"]

console.log(moveZeros(arr))