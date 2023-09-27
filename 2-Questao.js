function contarPalavras(frase) {
  let palavras = 0;

  for (let i = 0; i < frase.length; i++) {
    const caractereAtual = frase[i];

    if (i == 0 && caractereAtual !== " ") {
      palavras++;
    } else {
      if (caractereAtual === caractereAtual.toUpperCase()) {
        palavras++;
      }
    }
  }

  return palavras;
}

//Exemplo de uso
const frase = "façaMercadoNoIfoodEntregamosTudoOQueVocêPrecisaNaPortaDaSuaCasa";
const quantidadePalavras = contarPalavras(frase);
console.log(`Quantidade de palavras: ${quantidadePalavras}`);
