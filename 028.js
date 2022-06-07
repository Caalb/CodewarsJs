// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.

function high(x) {
  const palavra = x.split(" ").map((item) => {
    return item.split("");
  });

  for (let i = 0; i < palavra.length; i++) {
    let somaTotal = 0;
    let a = 1;
    let b = 2;
    let c = 3;
    palavra[i].map((letra) => {
      if (letra == "a") {
        a++;
      }
      if (letra === "b") {
        b *= b;
      }
      if (letra === "c") {
        c *= c;
      }
      this.soma = a + b + c;
    });
    let pontuacao = soma
    return pontuacao
  }
}

//NÂO CONSEGUI :)

console.log(high("take be to semynak"));
