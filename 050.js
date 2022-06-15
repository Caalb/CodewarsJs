// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none. For example:

const anagrams = (word, words) => {
    let wordUnicode = 0
    word.split("").map(i => {
        wordUnicode += i.charCodeAt()
    })
    
    let indexAnagram = []
    words.map(word => {
    let wordsUnicode = 0
        word.split("").map(char => {
            wordsUnicode += char.charCodeAt()
        })
        if(wordUnicode === wordsUnicode) {
            indexAnagram.push(word)
        }
    })
    return indexAnagram
}

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']))