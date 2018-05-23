window.cipher = {
  encode: encode,
  decode: decode
  // encode: (offset, string) => {}
};

function encode(offset, text) {
  for (let i = 0; i < text.length; i++) {
    encodeResult += String.fromCharCode(text.charCodeAt(i) + offset);
  }
  console.log(encodeResult);
}

function decode(offset, text) {
  for (let i = 0; i < text.length; i++) {
    decodeResult += String.fromCharCode(text.charCodeAt(i) - offset);
  }
  console.log(decodeResult);
}