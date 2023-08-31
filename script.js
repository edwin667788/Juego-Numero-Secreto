const numeroAleatorio = Math.floor(Math.random() * 100) + 1;
let intentos = 0;

const numeroInput = document.getElementById("numeroInput");
const adivinarBtn = document.getElementById("adivinarBtn");
const mensaje = document.getElementById("mensaje");

adivinarBtn.addEventListener("click", function () {
  const numeroJugador = parseInt(numeroInput.value);
  intentos++;

  if (numeroJugador < numeroAleatorio) {
    mensaje.textContent = "Demasiado bajo. Intenta nuevamente.";
  } else if (numeroJugador > numeroAleatorio) {
    mensaje.textContent = "Demasiado alto. Intenta nuevamente.";
  } else {
    mensaje.textContent = `¡Felicidades! Adivinaste el número en ${intentos} intentos.`;
    adivinarBtn.disabled = true;
  }
});