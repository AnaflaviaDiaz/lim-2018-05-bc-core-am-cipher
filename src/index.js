// var txtOffset = document.getElementById("txtOffset");
// var btnOffset = document.getElementById("btnOffset");

function offset() {
  var offset = document.getElementById("txtOffset");
  document.getElementById('encriptar').style.display = 'list-item';
  document.getElementById('desencriptar').style.display = 'list-item';
  document.getElementById('formOffset').style.display = 'none';
  console.log(offset);
  // document.getElementById('txtEncrypted').style.display = 'list-item';
  // document.getElementById('txtDecryted').style.display = 'list-item';
  // document.getElementById('btnEncryted').style.display = 'list-item';
  // document.getElementById('btnDecryted').style.display = 'list-item';
}

function encode() {
  var txtEncrypted = document.getElementById("txtEncrypted");
  var btnEncryted = document.getElementById("btnEncrypted");
}

function decode() {
  var txtDecryted = document.getElementById("txtDecrypted");
  var btnDecryted = document.getElementById("btnDecryted");
}
// function caesar(texto, clave) {
//     var output = "";
//     clave = parseInt(clave);
//     for (var i = 0; i < texto.length; i++) {
//         output += String.fromCharCode(texto.charCodeAt(i) + clave);
//     }
//     return output;
// }

