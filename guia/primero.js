// FizzBuzz
// Escribe una función que imprima los números del 1 al 100.
// Para múltiplos de 3, imprime "Fizz".
// Para múltiplos de 5, imprime "Buzz".
// Para múltiplos de ambos, imprime "FizzBuzz".

function fizzbuzz(params) {
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz");
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}
