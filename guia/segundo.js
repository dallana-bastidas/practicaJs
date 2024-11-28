// Palíndromo
// Escribe una función que determine si una cadena es un palíndromo (se lee igual de
// izquierda a derecha que de derecha a izquierda).

function palindromo(cadena) {
  const limpia = cadena.toLowerCase().replace(/\s+/g, "");

  const invertida = limpia.split("").reverse().join("");

  return limpia === invertida;
}

console.log(palindromo("anita lava la tina"));
console.log("hola mundo");
console.log("amo la paloma");
