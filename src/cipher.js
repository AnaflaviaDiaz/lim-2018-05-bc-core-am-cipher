window.cipher = {
  encode: encode,
  decode: decode
};

function encode(offset, text) {
  var encodeResult = "";
  for (let i = 0; i < text.length; i++) {
    var textChar = text.charCodeAt(i);
    if (textChar >= 97 && textChar <= 122) {
      encodeResult += String.fromCharCode((textChar - 97 + offset) % 26 + 97);
    } else if (textChar >= 65 && textChar <= 90) {
      encodeResult += String.fromCharCode((textChar - 65 + offset) % 26 + 65);
    } else {
      encodeResult += String.fromCharCode((textChar));
    }
  }
  console.log(encodeResult);
}

function decode(offset, text) {
  var decodeResult = "";
  for (let i = 0; i < text.length; i++) {
    var textChar = text.charCodeAt(i);
    if (textChar >= 97 && textChar <= 122) {
      decodeResult += String.fromCharCode((textChar - 97 - offset + 26) % 26 + 97);
    } else if (textChar >= 65 && textChar <= 90) {
      decodeResult += String.fromCharCode((textChar - 65 - offset + 26) % 26 + 65);
    } else {
      decodeResult += String.fromCharCode(textChar);
    }
  }
  console.log(decodeResult);
}