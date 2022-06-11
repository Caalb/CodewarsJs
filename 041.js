// Winter is coming, you must prepare your ski holidays. The objective of this kata is to determine the number of pair of gloves you can constitute from the gloves you have in your drawer.

// Given an array describing the color of each glove, return the number of pairs you can constitute, assuming that only gloves of the same color can form pairs.


function numberOfPairs(gloves) {
    let res = 0
    let valuesRepeat = gloves.filter((v, i) => gloves.indexOf(v) !== i)
    if(valuesRepeat === 0 ) return 0
    gloves.map(color => {
        for(let i = 0; i < valuesRepeat.length; i++) {
            color === valuesRepeat[i] ? res++ : null
        }
    })
        
    return res / 2
}


// NÃO CONSEGUI


console.log(numberOfPairs(['red','green','blue']))

// for(let i = 0; i < gloves.length; i++) {
    //     return gloves.filter(v => v.indexOf(gloves[i] !== i))
    // }

    // for(let i = 0; i < gloves.length; i++) {
        //     for(let j = 0; i < valuesRepeat.length; j++) {
        //         console.log(valuesRepeat[j])
        //     }
        // }