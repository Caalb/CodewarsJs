const shortcut = (string) => {
  const vowels = ['a', 'e', 'i', 'o', 'u'];

  return string.split('').filter((char) =>  !vowels.includes(char)).join('')
}
