function addDashes(input) {
    var inputValue = input.value;
  
    //Eliminar guiones y agregar nuevos
    inputValue = inputValue.replace(/-/g, '');
  
    //Donde van a ir los slash
    var dashPositions = [3, 7, 10];
  
    //Agregarlos en una posicion justa
    for (var i = 0; i < dashPositions.length; i++) {
      if (inputValue.length > dashPositions[i]) {
        inputValue = inputValue.slice(0, dashPositions[i]) + '-' + inputValue.slice(dashPositions[i]);
      }
    }
  
    //Cambiar el valor que esta en input
    input.value = inputValue;
  }
  function addSlash(input) {
  var inputValue = input.value;

  //Eliminar barras si habian antes
  inputValue = inputValue.replace(/\//g, '');

  //Verificar si ha agregado 2 numeros
  if (inputValue.length >= 2) {
    //Meter la barra si lo hizo
    inputValue = inputValue.slice(0, 2) + '/' + inputValue.slice(2);
  }

  //Actualizar si lo hizo
  input.value = inputValue;
}

function addSlashAndCheck(input) {
  var inputValue = input.value;

  // Elimina las barras diagonales existentes antes de agregar nuevas
  inputValue = inputValue.replace(/\//g, '');

  // Limita los números en la parte izquierda de la barra a 1-12
  var leftPart = inputValue.split('/')[0];
  if (leftPart.length > 2) {
    leftPart = leftPart.slice(0, 2);
  } else if (leftPart > 12) {
    leftPart = '12';
  }

  // Inserta la barra diagonal después de los números válidos
  inputValue = leftPart + '/' + inputValue.slice(leftPart.length);

  // Actualiza el valor del campo de entrada
  input.value = inputValue;

  // Verifica si el número después de la barra es menor a 23
  var expirationYear = inputValue.split('/')[1];
  if (expirationYear && expirationYear < 23) {
    var messageElement = document.getElementById('expirationMessage');
    messageElement.textContent = 'Esta tarjeta ha expirado, por favor ingrese un número de vencimiento válido';
  } else {
    var messageElement = document.getElementById('expirationMessage');
    messageElement.textContent = '';
  }
}

function validateLettersWithSpaces(input) {
  var inputValue = input.value;
  
  // Remueve los caracteres no alfabéticos y no espacios
  inputValue = inputValue.replace(/[^A-Za-z\s]/g, '');

  // Actualiza el valor del campo de entrada
  input.value = inputValue;
}

function agregarBarras(input) {
  var valorInput = input.value;

  // Eliminar todas las barras existentes antes de agregar nuevas
  valorInput = valorInput.replace(/-/g, '');

  // Definir la cantidad de números antes de agregar cada barra
  var cantidadNumerosPorBarra = 4;

  // Agregar las barras después de cada cantidad de números definida
  var valorFormateado = '';
  for (var i = 0; i < valorInput.length; i++) {
    if (i > 0 && i % cantidadNumerosPorBarra === 0) {
      valorFormateado += '-';
    }
    valorFormateado += valorInput[i];
  }

  // Actualizar el valor del campo de entrada
  input.value = valorFormateado;
}

function limitarLongitud(elemento) {
  if (elemento.value.length > 3) {
    elemento.value = elemento.value.slice(0, 3);
  }
}

function validarInformacion(input) {
  var valorInput = input.value;
  var infoElement = document.querySelector('.info');
  var infoFinalElement = document.querySelector('.info-final');

  if (valorInput === '123-123-12-1') {
    infoElement.textContent = 'Cupon: 20% descuento';
    infoFinalElement.textContent = 'Total: 1,808 colones';
  } else {
    infoElement.textContent = '';
    infoFinalElement.textContent = 'Total: 2,260 colones';
  }
}
function cupon(input){
  addDashes(input)
  validarInformacion(input)
}