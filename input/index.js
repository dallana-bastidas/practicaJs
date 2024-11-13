function cambio(colorDelInput) {
  document.querySelector("#divCuadrito").setAttribute("style", `background-color:${colorDelInput}`);
}

function titulo(letra) {
  document.querySelector("#unico").innerHTML = letra;
}

function opcion(opciones) {
  document.querySelector("#ayuda").innerHTML = opciones;
}

function alimentar() {
  let comida = document.querySelector("#valorNuevo").value;
  document.querySelector("#alimentame").innerHTML = comida;
}

function boton() {
  document.querySelector("#carga").innerHTML = "cargando";
}
