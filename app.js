// Codificar
var textToCipher = prompt("Que mensagem você deseja codificar?");
var shift = 33;
var ascii = "";

function cipher(str) {
  var outputMessage1 = document.getElementById("message1");
  var encryptedText = [];
  if (str === "" || !isNaN(str)) {
    alert("Precisa digitar uma mensagem.");
  } else {
    for (var i = 0; i < str.length; i++) {
      ascii = str.charCodeAt(i);
      if (ascii >= 65 && ascii <= 90) {
        encryptedText.push(String.fromCharCode((ascii - 65 + shift) % 26 + 65));
      } else if (ascii >= 97 && ascii <= 122) {
        encryptedText.push(String.fromCharCode((ascii - 97 + shift) % 26 + 97));
      } else if (ascii === 32) {
        encryptedText.push(String.fromCharCode(ascii));
      }
    }
  }
  outputMessage1.innerHTML = "Mensagem codificada<br>" + encryptedText.join("");
}

cipher(textToCipher);

// Decodificar
function decipher() {
  var textToDecipher = prompt("Insira aqui a mensagem que deseja revelar:");
  var outputMessage2 = document.getElementById("message2");
  var dechipheredText = [];
  for (var i = 0; i < textToDecipher.length; i++) {
    ascii = textToDecipher.charCodeAt(i);
    if (ascii >= 65 && ascii <= 90) {
      dechipheredText.push(String.fromCharCode((ascii - 65 - shift + 52) % 26 + 65));
    } else if (ascii >= 97 && ascii <= 122) {
      dechipheredText.push(String.fromCharCode((ascii - 97 - shift + 52) % 26 + 97));
    } else if (ascii === 32) {
      dechipheredText.push(String.fromCharCode(ascii));
    }
  }
  outputMessage2.innerHTML = "Mensagem decodificada<br>" + dechipheredText.join("");
}