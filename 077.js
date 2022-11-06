// Dizemos que um numero natural X esconde o Y quando, ao apagar alguns algarismos de X, o numero Y aparece. Por exemplo, o numero 12345 esconde o numero 235, uma vez que pode ser obtido ao apagar o 1 e 4, Por outro lado, ele não esconde o numero 154.

const rodrigo = (num, numOculto) => {
  const arrNum = num.toString().split("");
  const arrNumOculto = numOculto.toString().split("");
  const arrResult = [];

  arrNum.map((elem) => {
    if (arrNumOculto.includes(elem)) {
      arrResult.push(elem);
    }
  });
  return Number(arrResult.join("")) === numOculto;
};

console.log(rodrigo(45, 4));

const formula = (altura + 1) * (largura + 1)
return altura === 0 || largura === 0 ? 0 : formula