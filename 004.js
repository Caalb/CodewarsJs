// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// if(name === "R" || name === "r") {
//     return `${name} plays banjo`
// } else return `${name} does not play banjo`

function areYouPlayingBanjo(name) {
    if (name.substr(0, 1) === "R" || name.substr(0, 1) === "r") {
        return `${name} plays banjo`
    } else return `${name} does not play banjo`
}

function areYouPlayingBanjo2(nome){
    return nome[0].toLowerCase() === 'r' ? `${nome} plays banjo` : `${nome} does not play banjo`
}

console.log(areYouPlayingBanjo2('Ringo'))
