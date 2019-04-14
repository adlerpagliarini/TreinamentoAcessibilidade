// Variáveis
var btnAbreDialog = document.querySelector('#abreDialog');
var dialog = document.querySelector('.dialogNewsletter');
var dialogBody = document.querySelector('.dialogNewsletter-body');
var dialogOverlay = document.querySelector('.dialogNewsletter-overlay');
var dialogInput = dialog.querySelector('input');
var ignore = document.querySelectorAll('header, main, footer');


// Quando abrir a dialog...
btnAbreDialog.addEventListener('click', function() {
  ignore.forEach(e => e.setAttribute('inert', 'true'));
  dialog.classList.add('dialogNewsletter--aberto');
  dialogInput.focus();
});

function fechandoDialog() {
  ignore.forEach(e => e.removeAttribute('inert'));
  document.activeElement.blur();
  dialog.classList.remove('dialogNewsletter--aberto');     
  btnAbreDialog.focus();
}

// Listeners
document.querySelector('.dialogNewsletter-fechar').addEventListener('click', fechandoDialog);
btnAbreDialog.style.display = 'block';