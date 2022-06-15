// You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.

function findOutlier(integers){
    let even = 0;
    let odd = 0;
    integers.map(i => {
        i % 2 === 0 ? odd++ : even++
    })
    if(odd > even) {
        return parseInt(integers.filter(i =>  i % 2 == -1 || i % 2 == 1
        ))
    } else {
        return parseInt(integers.filter(i => i % 2 == 0
        ))
    }
}

console.log(findOutlier([1, 2, 3]))

console.log(1 % 2)


