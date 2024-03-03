let noButtonClicked = false; // Variable para controlar si se hizo clic en "No"

document.getElementById('no-btn').addEventListener('click', function() {
  if (!noButtonClicked) {
    noButtonClicked = true;

    // Mover y animar el botón "No"
    moveNoButton();

    // Ajustar gradualmente el tamaño del botón "Sí"
    scaleYesButton();
  }
});

document.getElementById('si-btn').addEventListener('click', function() {
  alert('¡Sí! 😍 ¡Eres increíble!');
  // Restaurar el tamaño original del botón "Sí"
  this.style.transform = 'scale(1)';
});

function moveNoButton() {
  const interval = setInterval(function() {
    const maxX = window.innerWidth - document.getElementById('no-btn').offsetWidth;
    const maxY = window.innerHeight - document.getElementById('no-btn').offsetHeight;
    const left = Math.floor(Math.random() * maxX);
    const top = Math.floor(Math.random() * maxY);
    document.getElementById('no-btn').style.left = left + 'px';
    document.getElementById('no-btn').style.top = top + 'px';
  }, 250);

  // Detener la animación después de 50 segundos
  setTimeout(function() {
    clearInterval(interval);
  }, 50000);
}

function scaleYesButton() {
  let scale = 1;
  const interval = setInterval(function() {
    scale += 0.1;
    document.getElementById('si-btn').style.transform = 'scale(' + scale + ')';
    if (scale >= 10) {
      clearInterval(interval);
    }
  }, 200);
}
document.getElementById('no-btn').style.position = 'absolute';
