class TeclaPiano {
  constructor(nota, letra) {
    this.nota = nota;
    this.letra = letra;
    this.elemento = document.createElement("div");
    this.elemento.classList.add("tecla-piano");
    this.elemento.innerText = this.letra;
    this.elemento.dataset.nota = this.nota;
    this.elemento.addEventListener("click", this.reproducirSonido.bind(this));
  }

  reproducirSonido() {
    let audio = new Audio(`audio/${this.nota}`);
    audio.play();
  }
}

let teclasPiano = [
  new TeclaPiano("nota1.mp3", `a`),
  new TeclaPiano("nota2.mp3", `s`),
  new TeclaPiano("nota3.mp3", `d`),
  new TeclaPiano("nota4.mp3", `f`),
  new TeclaPiano("nota5.mp3", `g`),
  new TeclaPiano("nota6.mp3", `h`),
  new TeclaPiano("nota7.mp3", `j`),
  new TeclaPiano("nota8.mp3", `k`),
];

let pianoContainer = document.querySelector("#piano");
teclasPiano.forEach((tecla) => {
  pianoContainer.appendChild(tecla.elemento);
});

document.addEventListener("keydown", (evento) => {
  let tecla = teclasPiano.find((teclaPiano) => teclaPiano.letra === evento.key);
  if (tecla !== undefined) {
    tecla.reproducirSonido();
    tecla.elemento.classList.add(`bg-warning`);
    setTimeout(() => {
      tecla.elemento.classList.remove(`bg-warning`);
    }, 100);
  }
  console.log(evento.key);

  //   FIND
});

// let body = document.querySelector('body');
// let seccion1 = document.createElement('section');
// seccion1.innerText = 'Hola';
// seccion1.classList.add('fs-2', 'text-center', 'text-danger');
// body.appendChild(seccion1);
