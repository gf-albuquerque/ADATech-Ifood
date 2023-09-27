function encontraNumerosSolitarios(array) {
  const contagemNumerosArray = {};
  const numerosSolitarios = [];

  for (const numero of array) {
    if (contagemNumerosArray[numero]) {
      contagemNumerosArray[numero]++;
    } else {
      contagemNumerosArray[numero] = 1;
    }
  }

  for (const numero of array) {
    if (contagemNumerosArray[numero] === 1) {
      numerosSolitarios.push(numero);
      contagemNumerosArray[numero] = 0;
    }
  }

  return numerosSolitarios;
}

//Exemplo de Uso
const numeros = [12, 17, 15, 19, 22, 17, 19, 12];
const solitarios = encontraNumerosSolitarios(numeros);
console.log(solitarios); // Deverá imprimir [15, 22]
