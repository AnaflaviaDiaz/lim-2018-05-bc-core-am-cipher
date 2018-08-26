const btnEncryted = document.getElementById('btn-encrypted');
const btnDecrypted = document.getElementById('btn-decrypted');
const txtOffset = document.getElementById('txt-offset');
const helperOffset = document.getElementById('danger-offset');
const txtToEncrypt = document.getElementById('txt-to-encrypt');
const helperText = document.getElementById('danger-text');
const txtResult = document.getElementById('txt-result');
const btnClear = document.getElementById('btn-clear');
const btnCopy = document.getElementById('btn-copy');

const verifiedOffset = (offset) => {
  if (!offset) {
    helperOffset.style.display = 'block';
    return false;
  } else {
    helperOffset.style.display = 'none';
    return true;
  }
}

const verifiedText = (text) => {
  if (text) {
    helperText.style.display = 'none';
    return true;
  } else {
    helperText.style.display = 'block';
    return false;
  }
}

btnEncryted.addEventListener('click', () => {
  const offset = parseInt(txtOffset.value);
  const text = txtToEncrypt.value;
  const haveOffset = verifiedOffset(offset);
  const haveText = verifiedText(text);
  if (haveOffset && haveText) txtResult.innerHTML = cipher.encode(offset, text);
});

btnDecrypted.addEventListener('click', () => {
  const offset = parseInt(txtOffset.value);
  const text = txtToEncrypt.value;
  const haveOffset = verifiedOffset(offset);
  const haveText = verifiedText(text);
  if (haveOffset && haveText) txtResult.innerHTML = cipher.decode(offset, text);
});

btnClear.addEventListener('click', () => {
  helperOffset.style.display = 'none';
  helperText.style.display = 'none';
  txtToEncrypt.value = '';
  txtResult.innerHTML = '';
});

btnCopy.addEventListener('click', () => {
  const aux = document.createElement('input');
  aux.setAttribute('value', txtResult.innerHTML);
  document.body.appendChild(aux);
  aux.select();
  document.execCommand('copy');
  document.body.removeChild(aux);
  txtResult.select();
});
