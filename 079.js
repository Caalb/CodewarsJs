const order = (words) => {
  const ordered_words = []

  words.split(' ').forEach(word => {
    word.split('').forEach(char => {
      if(! isNaN(char)) {
        ordered_words[char - 1] = word
      }
    })
  })

  return ordered_words.join(' ');
}

console.log(order("is2 Thi1s T4est 3a"))