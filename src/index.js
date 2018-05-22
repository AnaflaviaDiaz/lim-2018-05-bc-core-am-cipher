var encodeText, decodeText, offset;
var encodeResult = '';
var decodeResult = '';
// document.getElementById("btnOffset").addEventListener("click", offset);

// function offset() {
//   var offset = document.getElementById("txtOffset");
//   document.getElementById('formOffset').style.display = 'none';
//   document.getElementById('encriptado').style.display = 'list-item';
// }

function encode() {
  offset = document.getElementById("txtOffset").value;
  offset = parseInt(offset);
  encodeText = document.getElementById("txtEncrypted").value;
  console.log(offset, encodeText);
  for (let i = 0; i < encodeText.length; i++) {
    encodeResult += String.fromCharCode(encodeText.charCodeAt(i) + offset);
  }
  console.log(encodeResult);
}

function decode() {
  offset = document.getElementById("txtOffset").value;
  offset = parseInt(offset);
  decodeText = document.getElementById("txtDecryted").value;
  console.log(offset, decodeText);
  for (let i = 0; i < decodeText.length; i++) {
    decodeResult += String.fromCharCode(decodeText.charCodeAt(i) - offset);
  }
  console.log(decodeResult);
}




// document.getElementById('txtEncrypted').style.display = 'list-item';
// document.getElementById('txtDecryted').style.display = 'list-item';
// document.getElementById('btnEncryted').style.display = 'list-item';
// document.getElementById('btnDecryted').style.display = 'list-item';
// var txtOffset = document.getElementById("txtOffset");
// var btnOffset = document.getElementById("btnOffset");

// function encode() {
//   var txtEncrypted = document.getElementById("txtEncrypted");
//   var btnEncryted = document.getElementById("btnEncrypted");
// }

// function decode() {
//   var txtDecryted = document.getElementById("txtDecrypted");
//   var btnDecryted = document.getElementById("btnDecryted");
// }
// function caesar(texto, clave) {
//     var output = "";
//     clave = parseInt(clave);
//     for (var i = 0; i < texto.length; i++) {
//         output += String.fromCharCode(texto.charCodeAt(i) + clave);
//     }
//     return output;
// }

