// Contar caracteres
// Escribe una función que tome una cadena y devuelva un objeto con el conteo de cada
// carácter en la cadena.

function contar(cadena) {
  const contador = {};

  for (let char of cadena) {
    if (contador[char]) {
      contador[char]++;
    } else {
      contador[char] = 1;
    }
  }
}
