// This time no story, no theory. The examples below show you how to write function accum:

// Examples:
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.



const accum = (str) => {
  const arr = [];

  str.split('').map((char, index) => {
    for(let i = 0; i < index + 1; i++) {
      arr.push(char.toLowerCase())
    }

    arr.push('-')
  })

  const result = arr.join('').substring(0, arr.length - 1).split('-')

  return result.map(e => e.charAt(0).toUpperCase() + e.slice(1)).join('-')
}


console.log(accum('abcd'))