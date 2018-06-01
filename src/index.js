let encodeText = "",
  decodeText = "",
  offset;

document.getElementById("btnEncrypted").addEventListener("click", () => {
  offset = parseInt(document.getElementById("txtOffset").value);
  encodeText = document.getElementById("txtEncrypted").value;
  if (offset) {
    document.getElementById("dangerOffset").style.display = "none";
    if (encodeText) {
      document.getElementById("dangerText").style.display = "none";
      document.getElementById("answer").style.display = "block";
      document.getElementById("result").innerHTML = cipher.encode(offset, encodeText);
    } else {
      document.getElementById("dangerText").style.display = "block";
    }
  } else {
    document.getElementById("dangerOffset").style.display = "block";
  }
});

document.getElementById("btnDecrypted").addEventListener("click", () => {
  offset = parseInt(document.getElementById("txtOffset").value);
  decodeText = document.getElementById("txtEncrypted").value;
  if (offset) {
    document.getElementById("dangerOffset").style.display = "none";
    if (decodeText) {
      document.getElementById("dangerText").style.display = "none";
      document.getElementById("answer").style.display = "block";
      document.getElementById("result").innerHTML = cipher.decode(offset, decodeText);
    } else {
      document.getElementById("dangerText").style.display = "block";
    }
  } else {
    document.getElementById("dangerOffset").style.display = "block";
  }
});

/* document.getElementById("change").addEventListener("click", () => {
  result = document.getElementById("result").textContent;
  if (result != "") {
    document.getElementById("txtEncrypted").value = result;
    document.getElementById("result").innerHTML = "";
    document.getElementById("answer").style.display = "none";
  }
}); */

document.getElementById("clear").addEventListener("click", () => {
  document.getElementById("dangerOffset").style.display = "none";
  document.getElementById("dangerText").style.display = "none";
  document.getElementById("txtOffset").value = "";
  document.getElementById("txtEncrypted").value = "";
  document.getElementById("result").innerHTML = "";
  document.getElementById("answer").style.display = "none";
});
