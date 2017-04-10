function isValidCard(creditCardNumber) {
    // Escribe tu código aquí
    if (creditCardNumber == undefined){
      return "Ingresa un numero";
    }
    if (typeof creditCardNumber != "number"){
      return "Error de dato";
    }
    var digitos= creditCardNumber.toString();
    if (digitos.length < 15){
      return "Faltan numeros";
    }
  return metodoLuhn(digitos);
}

// Implementación de Metodología de Luhn
function metodoLuhn(numeroTarjeta){
  var ultimoDigito = numeroTarjeta.slice(-1);
  var tarjetaSinUltimoDigito = numeroTarjeta.slice(0,-1);
  var digitosSeparadosAlreves = tarjetaSinUltimoDigito.split("").reverse();
  var digitosConMapeo = digitosSeparadosAlreves.map(mapeoDeDigitos);
  var sumatoria = digitosConMapeo.reduce(sumandoDigitos);
  var validacion = sumatoria + Number(ultimoDigito);
  return validacion%10 == 0;
}

// Mapeo de digítos pares e impares
function mapeoDeDigitos(digito, indice){
  if (indice%2 == 0) {
    digito = digito * 2;
    if (digito > 9){
      digito = digito - 9;
    }
  }
  else {
    // El dígito mantiene su valor
  }
  return digito;
}

// Sumatoria de los dígitos
function sumandoDigitos(suma, digito){
    return suma + Number(digito);
}

// NO TOCAR ESTE CÓDIGO O EXPLOTARÁ LA PC EN 10 SEGUNDOS
if (typeof exports !== 'undefined') {
    exports.isValidCard = isValidCard;
}
