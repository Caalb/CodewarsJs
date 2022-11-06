// Um grande amigo seu mora numa cidade pequena, onde existem apenas duas empresas de táxi - a Empresa 1 e a Empresa 2. Ambas mudam suas taxas a cada dia e calculam o valor de suas corridas da seguinte forma: uma taxa fixa mais um valor por quilômetro rodado.
// Seu amigo é fisioterapeuta e pega táxis diariamente para visitar seus clientes ao redor da cidade. Você decidiu escrever um código para ajudá-lo a decidir qual empresa escolher para cada uma das corridas, baseado no preço.

// Sua função receberá 4 valores: TF1 (a taxa fixa da empresa 1), VQR1 (o valor por quilômetro rodado da empresa 1), TF2 (a taxa fixa da empresa 2), VQR2 (o valor por quilômetro rodado da empresa 2), todos em formato string. Seu retorno deve ser uma string em uma das seguintes formas:

// “Tanto faz” - para o caso de o valor das duas empresas para qualquer corrida ser igual
// “Empresa 1” - se o valor da Empresa 1 for sempre menor que o da Empresa 2
// “Empresa 2” - para o caso contrário do citado acima
// “Empresa Xpto quando a distância < N, Tanto faz quando a distância = N, Empresa Ypto quando a distância > N” para o caso de a escolha depender da distância a ser percorrida (onde Xpto e Ypto representa 1 ou 2 e N representa a distância).

const escolheTaxi = (tarifaFixa1, valorKM1, tarifaFixa2, valorKM2) => {
  tarifaFixa1 = Number(tarifaFixa1);
  valorKM1 = Number(valorKM1);
  tarifaFixa2 = Number(tarifaFixa2);
  valorKM2 = Number(valorKM2);

  if (tarifaFixa1 == tarifaFixa2 && valorKM1 == valorKM2) {
    return "Tanto faz";
  } else if (tarifaFixa1 > tarifaFixa2 && valorKM1 > valorKM2) {
    return "Empresa 2";
  } else if (tarifaFixa2 > tarifaFixa1 && valorKM2 > valorKM1) {
    return "Empresa 1";
  }

  const result = (tarifaFixa1 - tarifaFixa2) / (valorKM1 - valorKM2)
  const result2 = result < 0 ? result * -1 : result

  return `Empresa Xpto quando a distância < ${result2}, Tanto faz quando a distância = ${result2}, Empresa Ypto quando a distância > ${result2} para o caso de a escolha depender da distância a ser percorrida.`
};

console.log(escolheTaxi("8.19", "48.12", "6.68", "48.12"))
