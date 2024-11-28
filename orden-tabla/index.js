//cSpell:disable
let numeros = [22, 56, 52, 34, 37, 98, 1002, 12, 34, 76];
let nombres = ["dallana", "miguel", "felipe", "andres", "mikchael", "sandra", "adriana", "bibiana"];

let x = document.querySelector("#ordenar");

function ordenar(nombreArray, tipoOrden) {
  if (nombreArray == "numeros") {
    if (tipoOrden == "ascendente") {
      // sort es para ordenar
      numeros.sort((a, b) => {
        return a - b;
      });
      //   se creo un avariable y se llama en este caso es"numeros"
      x.innerHTML = numeros;
    } else {
      numeros.sort((a, b) => {
        return b - a;
      });
      x.innerHTML = numeros;
    }
  } else {
    if (tipoOrden == "ascendente") {
      nombres.sort();
    } else {
      nombres.sort();
      //   el reverse solo se pone cuando se utilizan letras
      nombres.reverse();
    }
    x.innerHTML = nombres;
  }
}
