// You certainly can tell which is the larger number between 210 and 215.

// But what about, say, 210 and 310? You know this one too.

// Things tend to get a bit more complicated with both different bases and exponents: which is larger between 39 and 56?

// Well, by now you have surely guessed that you have to build a function to compare powers, returning -1 if the first member is larger, 0 if they are equal, 1 otherwise; powers to compare will be provided in the [base, exponent] format:

function comparePowers(n1, n2) {
    const resultN1 = n1[1] * Math.log(n1[0])
    const resultN2 = n2[1] * Math.log(n2[0])

    return (resultN1 > resultN2) ? -1 : (resultN1 === resultN2) ? 0 : 1
}

console.log(comparePowers([205532158, 906845748], [200452385, 991559120]))