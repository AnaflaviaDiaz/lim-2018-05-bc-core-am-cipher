let encodeText = "", decodeText = "", result ="", offset;

document.getElementById("btnEncrypted").addEventListener("click", () => {
  offset = parseInt(document.getElementById("txtOffset").value);
  encodeText = document.getElementById("txtEncrypted").value;
  if (offset) {
    if (encodeText) {
      document.getElementById("answer").style.display = "block";
      document.getElementById("result").innerHTML = cipher.encode(offset, encodeText);
    }
    else alert("No colocaste un texto para modificar");
  }
  else alert("No colocaste un número de desplazamientos para modificar el texto");
});

document.getElementById("btnDecrypted").addEventListener("click", () => {
  offset = parseInt(document.getElementById("txtOffset").value);
  decodeText = document.getElementById("txtEncrypted").value;
  if (offset) {
    if (decodeText) {
      document.getElementById("answer").style.display = "block";
      document.getElementById("result").innerHTML = cipher.decode(offset, decodeText);
    }
    else alert("No colocaste un texto para modificar");
  }
  else alert("No colocaste un número de desplazamientos para modificar el texto");
});

document.getElementById("change").addEventListener("click", () => {
  result = document.getElementById("result").textContent;
  document.getElementById("txtEncrypted").value = result;
  document.getElementById("result").innerHTML = "";
  document.getElementById("answer").style.display = "none";
});

document.getElementById("clear").addEventListener("click", () => {
  document.getElementById("txtOffset").value = "";
  document.getElementById("txtEncrypted").value = "";
  document.getElementById("result").innerHTML = "";
  document.getElementById("answer").style.display = "none";
});