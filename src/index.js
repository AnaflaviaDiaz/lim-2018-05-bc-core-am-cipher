var encodeText, decodeText, offset;

document.getElementById("btnEncrypted").addEventListener("click", function() {
  offset = document.getElementById("txtOffset").value;
  encodeText = document.getElementById("txtEncrypted").value;
  document.getElementById("result").innerHTML = cipher.encode(offset, encodeText);
});

document.getElementById("btnDecrypted").addEventListener("click", function() {
  offset = document.getElementById("txtOffset").value;
  decodeText = document.getElementById("txtEncrypted").value;
  document.getElementById("result").innerHTML = cipher.decode(offset, decodeText);
});

document.getElementById("clear").addEventListener("click", function() {
  document.getElementById("txtOffset").value = "";
  document.getElementById("txtEncrypted").value = "";
  document.getElementById("result").innerHTML = "";
});