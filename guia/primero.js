// FizzBuzz
// Escribe una función que imprima los números del 1 al 100.
// Para múltiplos de 3, imprime "Fizz".
// Para múltiplos de 5, imprime "Buzz".
// Para múltiplos de ambos, imprime "FizzBuzz".


for (var i = 1; i <= 100; i++){
  if (i % 3 == 0 && i % 5 == 0){
    document.write ("fizzbuzz")

  } else if (i % 3 == 0){
    document.write("fizz")

  }else if (i % 5 == 0){
    document.write("buzz")
  }else{
    document.write(i + "<br/>")
  }
}
