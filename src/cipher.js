window.cipher = {
  encode: encode,
  decode: decode,
  createCipherWithOffset: createCipherWithOffset
};

/*  function alalalala(offset){
  retun {
    decode:function(offset,string){}
    encode:function(offset,string){}
  }
} */

function encode(offset, text) {
  var encodeResult = "";
  // var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < text.length; i++) {
    var textChar = text.charCodeAt(i);

    
    if (textChar >= 97 && textChar <= 122) {  //Minuscula
      // encodeResult += String.fromCharCode((textChar - 97 + offset) % 26 + 97);
      encodeResult += String.fromCharCode(textChar + offset % 26);
    } else if (textChar >= 65 && textChar <= 90) {  //Mayuscula
      // encodeResult += String.fromCharCode((textChar - 65 + offset) % 26 + 65);
      encodeResult += String.fromCharCode(textChar + offset % 26);
    } else {  //signos o espacios
      encodeResult += String.fromCharCode((textChar));
    }
  }
  return encodeResult;
}

function decode(offset, text) {
  var decodeResult = "";
  // var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  for (let i = 0; i < text.length; i++) {
    var textChar = text.charCodeAt(i);
    if (textChar >= 97 && textChar <= 122) {  //minuscula
      decodeResult += String.fromCharCode((textChar - 97 - offset + 26) % 26 + 97);
    } else if (textChar >= 65 && textChar <= 90) {  //mayuscula
      decodeResult += String.fromCharCode((textChar - 65 - offset + 26) % 26 + 65);
    } else {  // signos espacios
      decodeResult += String.fromCharCode(textChar);
    }
  }
  return decodeResult;
}

function createCipherWithOffset() {}