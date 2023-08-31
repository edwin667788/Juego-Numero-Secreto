const numeroMaximoIntentos = 5; // Número máximo de intentos permitidos
let numeroAleatorio = generarNumeroAleatorio(); // Generar un nuevo número aleatorio
let intentos = 0;

const numeroInput = document.getElementById("numeroInput");
const adivinarBtn = document.getElementById("adivinarBtn");
const mensaje = document.getElementById("mensaje");
const reiniciarBtn = document.getElementById("reiniciarBtn");

// Función para generar un nuevo número aleatorio
function generarNumeroAleatorio() {
  return Math.floor(Math.random() * 100) + 1;
}

// Función para reiniciar el juego
function reiniciarJuego() {
  intentos = 0;
  numeroAleatorio = generarNumeroAleatorio();
  mensaje.textContent = "";
  numeroInput.value = "";
  adivinarBtn.disabled = false;
  reiniciarBtn.disabled = true;
}

// Evento de clic en el botón "Adivinar"
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
    reiniciarBtn.disabled = false;
  }

  if (intentos >= numeroMaximoIntentos) {
    mensaje.textContent = `Agotaste tus intentos. El número era ${numeroAleatorio}.`;
    adivinarBtn.disabled = true;
    reiniciarBtn.disabled = false;
  }
});

// Evento de clic en el botón "Reiniciar"
reiniciarBtn.addEventListener("click", reiniciarJuego);
