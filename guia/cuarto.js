// Revertir cadena
// Escribe una función que tome una cadena y devuelva la cadena invertida.
// split = convierte la cadena en un arreglo
// reverse invierte el orden
//join  convierte el arreglo invertido de nuevo en una cadena



function revertir(cadena) {
  let invertida = '';
  for (let i = cadena.length - 1 ; i >= 0; i --){
    invertida += cadena[i];
  }
  return invertida;  

}
























































// function revertir(cadena) {
//   return cadena.splint('').reverse().join('');

// }

// console.log(revertir ("hola mundo"));
// console.log(revertir ("Colombia"));