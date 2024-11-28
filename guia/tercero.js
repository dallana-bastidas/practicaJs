// Anagramas
// Escribe una función que determine si dos cadenas son anagramas (contienen las mismas
// letras en diferente orden).

function anagramas(cadena1, cadena2) {
  const limpia = (cadena) => cadena.toLowerCase().replace(/\s+/g, "");

  const odenado = (cadena) => limpia(cadena).split("").sort().join("");

  return odenado(cadena1) === ordenado(cadena2);
}

console.log(anagramas("amor", "roma"));
console.log(anagramas("anagrama", "nagrama"));
console.log(anagramas("hola", "adios"));
console.log("españa", "se pana");
