var encodeText, decodeText, offset;
var encodeResult = '';
var decodeResult = '';

document.getElementById("btnEncrypted").addEventListener("click", function() {
  offset = document.getElementById("txtOffset").value;
  offset = parseInt(offset);
  encodeText = document.getElementById("txtEncrypted").value;
  cipher.encode(offset, encodeText);
});

document.getElementById("btnDecrypted").addEventListener("click", function() {
  offset = document.getElementById("txtOffset").value;
  offset = parseInt(offset);
  decodeText = document.getElementById("txtDecrypted").value;
  cipher.decode(offset, decodeText);
});

// function encode() {
//   offset = document.getElementById("txtOffset").value;
//   offset = parseInt(offset);
//   encodeText = document.getElementById("txtEncrypted").value;
//   console.log(offset, encodeText);
//   for (let i = 0; i < encodeText.length; i++) {
//     encodeResult += String.fromCharCode(encodeText.charCodeAt(i) + offset);
//   }
//   console.log(encodeResult);
// }

// function decode() {
//   offset = document.getElementById("txtOffset").value;
//   offset = parseInt(offset);
//   decodeText = document.getElementById("txtDecryted").value;
//   console.log(offset, decodeText);
//   for (let i = 0; i < decodeText.length; i++) {
//     decodeResult += String.fromCharCode(decodeText.charCodeAt(i) - offset);
//   }
//   console.log(decodeResult);
// }
