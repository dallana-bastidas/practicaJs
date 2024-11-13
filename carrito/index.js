function cargarImagen = (){
  let input = document.getElementById('inputURL').value
  let container =document.getElementById('contenedorImg')

  container.innerHTML =  '<img src = ${input}>'

}