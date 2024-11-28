/**
 * Para reproducir el sonido lo unico que necesitas colocar es
 *
      const ins = new Audio("audio/nota1.mp3");
      ins.play();


      Ejemplo con el evento onkeypress onkeyup onmouseenter
	onmouseleave onclick

	-un piano por cada evento

 */

// onclick

window.onload = () => {
  var keys = document.querySelectorAll(".key");
  keys.forEach(function (key) {
    key.addEventListener("click", function () {
      var note = this.getAttribute("data-note");
      playNote(note);
    });
  });

  function playNote(note) {
    var audio = new Audio("audio/nota1.mp3");
    audio.play();
  }
};

// onkeyup

function playSound(note) {
  const audio = new Audio("audio/nota1.mp3");
  audio.play();
}

document.addEventListener("keyup", (event) => {
  const keyMap = {
    a: "Do",
    s: "Re",
    d: "Mi",
    f: "Fa",
    g: "Sol",
    h: "La",
    j: "Si",
  };
  const note = keyMap[event.key];
  if (note) {
    playSound(note);
    const x = document.querySelector('#pianoKeyUp .key[data-note="${note}"]');
    console.log("🚀 ~ document.addEventListener ~ keyElement:", keyElement);
    keyElement.classList.add("active");
    setTimeout(() => keyElement.classList.remove("active"), 200);
  }
});

// OnMouseEnter
function playSound(note) {
  const audio = new Audio("audio/nota1.mp3");
  audio.play();
}

document.querySelectorAll("#pianoMouseEnterLeave .key").forEach((key) => {
  key.addEventListener("mouseenter", () => {
    playSound(key.dataset.note);
    key.classList.add("active");
  });
  key.addEventListener("mouseleave", () => {
    key.classList.remove("active");
  });
});

function tocarNota() {
  const audio = new Audio("audio/nota1.mp3");
  audio.play();

}
