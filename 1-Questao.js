function converterHora(horario) {
  const partes = horario.split(":");

  let hora = parseInt(partes[0]);
  let minutos = parseInt(partes[1]);
  let final = partes[2];
  let segundos = "";
  let letras = "";

  for (let i = final.length - 1; i >= 0; i--) {
    const caractere = final.charAt(i);

    if (caractere >= "0" && caractere <= "9") {
      segundos = caractere + segundos;
    } else {
      letras = caractere + letras;
    }
  }

  if (letras === "AM" && hora > 12) {
    return console.log("Entrada invalida!");
  }

  if (letras === "PM" && hora !== 12) {
    hora += 12;
  } else if (segundos === "AM" && hora === 12) {
    hora = 0;
  }

  const horaFormato24 = (hora < 10 ? "0" : "") + hora;

  return console.log(`${horaFormato24}:${minutos}:${segundos}`);
}

// Exemplo de uso:
const horaFormato12 = "00:30:45AM";
converterHora(horaFormato12);
