// Eliminar duplicados en un array
// Escribe una función que tome un array y devuelva un nuevo array sin elementos
// duplicados.

// indexOf

function eliminar(array) {
  return array.filter((valor, index) => array.indexOf(valor) === index);
}

console.log(eliminar ([1,2,3,4,5]));
console.log(eliminar([10,10,20,20,50]));
console.log(eliminar(["a","b","a","c","b"]));