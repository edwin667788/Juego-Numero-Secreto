const numeroAleatorio = generarNumeroAleatorio();
let intentos = 0;
const maxIntentos = 10;
const intentosAnteriores = [];

const numeroInput = document.getElementById("numeroInput");
const adivinarBtn = document.getElementById("adivinarBtn");
const reiniciarBtn = document.getElementById("reiniciarBtn");
const mensaje = document.getElementById("mensaje");
const intentosAnterioresContainer = document.getElementById("intentosAnteriores");

adivinarBtn.addEventListener("click", function () {
  const numeroJugador = parseInt(numeroInput.value);
  
  if (isNaN(numeroJugador) || numeroJugador < 1 || numeroJugador > 100) {
    mensaje.textContent = "Ingresa un número válido entre 1 y 100.";
    return;
  }

  intentos++;
  intentosAnteriores.push(numeroJugador);

  if (numeroJugador === numeroAleatorio) {
    mensaje.textContent = `¡Felicidades! Adivinaste el número en ${intentos} intentos.`;
    adivinarBtn.disabled = true;
    reiniciarBtn.disabled = false;
  } else if (intentos === maxIntentos) {
    mensaje.textContent = `Se han agotado los intentos. El número era ${numeroAleatorio}.`;
    adivinarBtn.disabled = true;
    reiniciarBtn.disabled = false;
  } else if (numeroJugador < numeroAleatorio) {
    mensaje.textContent = "Demasiado bajo. Intenta nuevamente.";
  } else {
    mensaje.textContent = "Demasiado alto. Intenta nuevamente.";
  }

  mostrarIntentosAnteriores();
});

reiniciarBtn.addEventListener("click", function () {
  reiniciarJuego();
});

function generarNumeroAleatorio() {
  return Math.floor(Math.random() * 100) + 1;
}

function reiniciarJuego() {
  numeroAleatorio = generarNumeroAleatorio();
  intentos = 0;
  intentosAnteriores.length = 0;
  mensaje.textContent = "";
  intentosAnterioresContainer.textContent = "";
  numeroInput.value = "";
  adivinarBtn.disabled = false;
  reiniciarBtn.disabled = true;
}

function mostrarIntentosAnteriores() {
  intentosAnterioresContainer.textContent = "Intentos anteriores: " + intentosAnteriores.join(", ");
}
