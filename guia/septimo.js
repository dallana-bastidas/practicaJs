// Números primos
// Escribe una función que determine si un número dado es primo.

function primo(numero) {
  if (num <= 1) return false;
  if (num === 2) return true;

  if (num % 2 === 0) return false;

  for (let i = 3; i <= Math.sqrt(num); i += 2) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(primo(2));
console.log(primo(3));
console.log(primo(4));
console.log(primo(5));
console.log(primo(16));
console.log(primo(29));
