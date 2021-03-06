window.cipher = {
  encode(offset, text) {
    let encodeResult = "";

    for (let i = 0; i < text.length; i++) {
      const textChar = text.charCodeAt(i);
      if (textChar >= 97 && textChar <= 122) {
        encodeResult += String.fromCharCode((textChar - 97 + offset) % 26 + 97);
      } else if (textChar >= 65 && textChar <= 90) {
        encodeResult += String.fromCharCode((textChar - 65 + offset) % 26 + 65);
      } else encodeResult += String.fromCharCode(textChar);
    }

    return encodeResult;
  },

  decode(offset, text) {
    let decodeResult = "";

    for (let i = 0; i < text.length; i++) {
      const textChar = text.charCodeAt(i);
      if (textChar >= 97 && textChar <= 122) {
        if ((textChar - offset) < 97 && (textChar - offset % 26) < 97) {
          const differenceMinus = 97 - (textChar - offset % 26);
          decodeResult += String.fromCharCode(123 - differenceMinus);
        } else decodeResult += String.fromCharCode(textChar - offset % 26);
      } else if (textChar >= 65 && textChar <= 90) {
        if ((textChar - offset) < 65 && (textChar - offset % 26) < 65) {
          const differenceMayus = 65 - (textChar - offset % 26);
          decodeResult += String.fromCharCode(91 - differenceMayus);
        } else decodeResult += String.fromCharCode(textChar - offset % 26);
      } else decodeResult += String.fromCharCode(textChar);
    }

    return decodeResult;
  },

  createCipherWithOffset(offset) {
    const endecode = {
      encode: cipher.encode(offset, "text"),
      decode: cipher.decode(offset, "text")
    }
    return endecode;
  }
};
