let encodeText = "",
  decodeText = "",
  offset;

document.getElementById("btn-encrypted").addEventListener("click", () => {
  offset = parseInt(document.getElementById("txt-offset").value);
  encodeText = document.getElementById("txt-encrypted").value;
  if (offset) {
    document.getElementById("danger-offset").style.display = "none";
    if (encodeText) {
      document.getElementById("danger-text").style.display = "none";
      document.getElementById("result").innerHTML = cipher.encode(offset, encodeText);
    } else {
      document.getElementById("danger-text").style.display = "block";
    }
  } else {
    document.getElementById("danger-offset").style.display = "block";
  }
});

document.getElementById("btn-decrypted").addEventListener("click", () => {
  offset = parseInt(document.getElementById("txt-offset").value);
  decodeText = document.getElementById("txt-encrypted").value;
  if (offset) {
    document.getElementById("danger-offset").style.display = "none";
    if (decodeText) {
      document.getElementById("danger-text").style.display = "none";
      document.getElementById("result").innerHTML = cipher.decode(offset, decodeText);
    } else {
      document.getElementById("danger-text").style.display = "block";
    }
  } else {
    document.getElementById("danger-offset").style.display = "block";
  }
});

document.getElementById("copy").addEventListener("click", () => {
  let aux = document.createElement("input");
  aux.setAttribute("value", document.getElementById("result").innerHTML);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand("copy");
  document.body.removeChild(aux);
  document.getElementById("result").select();
})

document.getElementById("clear").addEventListener("click", () => {
  document.getElementById("danger-offset").style.display = "none";
  document.getElementById("danger-text").style.display = "none";
  document.getElementById("txt-offset").value = "";
  document.getElementById("txt-encrypted").value = "";
  document.getElementById("result").innerHTML = "";
});
