var encodeText, decodeText, offset;

document.getElementById("btnEncrypted").addEventListener("click", function() {
  offset = document.getElementById("txtOffset").value;
  encodeText = document.getElementById("txtEncrypted").value;
  cipher.encode(offset, encodeText);
});

document.getElementById("btnDecrypted").addEventListener("click", function() {
  offset = document.getElementById("txtOffset").value;
  decodeText = document.getElementById("txtDecrypted").value;
  cipher.decode(offset, decodeText);
});
