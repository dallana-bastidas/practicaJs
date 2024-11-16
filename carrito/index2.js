let producto = [];

function agregar(precio) {
  producto.push(precio);
  document.querySelector("#cart-count").innerHTML = producto.length;
  verCarrito(producto);
  verTotal();

  console.log(producto.length);
}

function verCarrito(precios) {
  document.querySelector("#card-items").innerHTML = precios;
}

verCarrito(producto);

function verTotal() {
  const total = document.querySelector("#total");
  let suma = 0;
  producto.forEach((element) => {
    suma = suma + element;
  });
  total.innerHTML = suma;
}
