// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
    return l.filter(item => typeof(1) === typeof(item)
    )
}

console.log(filter_list([1,2,"aasf","1","123",123]))

console.log(typeof(1) === typeof(1))