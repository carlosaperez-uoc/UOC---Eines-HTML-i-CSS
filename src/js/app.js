let comptador = 0;
let passos = 0;
let interval;

// Seleccionem els elements del DOM
const comptadorElement = document.getElementById('comptador');
const passosElement = document.getElementById('passos');
const comencarElement = document.getElementById('comencar');
const seguentPasElement = document.getElementById('seguentPas');

// Funció per començar i aturar el comptador
comencarElement.addEventListener('click', () => {
  if (comencarElement.textContent === "Començar a cuinar!") {

    interval = setInterval(() => {
      comptador++; 

      // Converteix el comptador en format 00:00
      const minutes = Math.floor(comptador / 60).toString().padStart(2, '0');
      const seconds = (comptador % 60).toString().padStart(2, '0');
      comptadorElement.textContent = `Comptador: ${minutes}:${seconds}`;
      
    }, 1000); // Actualitza cada 1 segon (1000 mil·lisegons)

    comencarElement.textContent = "Parar";
  } else {
    clearInterval(interval); // Aturar el comptador

    comencarElement.textContent = "Començar a cuinar!";
  }
});

// Funció per incrementar els passos
seguentPasElement.addEventListener('click', () => {
  if (passos < 8) {
    passos++; 
    passosElement.textContent = `Pas: ${passos}`;
  } else {
    alert("Bon profit!");
  }
});
