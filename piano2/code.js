/**
 * Para reproducir el sonido lo unico que necesitas colocar es
 *
      const ins = new Audio("audio/nota1.mp3");
      ins.play();


      Ejemplo con el evento onkeypress onkeyup onmouseenter
	onmouseleave onclick

	-un piano por cada evento

 */

window.onload = () => {
  var keys = document.querySelectorAll(".key");
  keys.forEach(function (key) {
    key.addEventListener("click", function () {
      var note = this.getAttribute("data-note");
      playNote(note);
    });
  });

  function playNote(note){
      var audio = new Audio('audio/nota1.mp3');
      audio.play()
  }

};
