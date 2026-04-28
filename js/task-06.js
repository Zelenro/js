const inputRef = document.querySelector('#validation-input');
const dataLength = Number.parseInt(inputRef.attributes['data-length'].value);

const scriptValidator = e => {
  console.log(e.target.value.length === dataLength);
  if (e.target.value.length >= dataLength) {
    inputRef.classList.remove('invalid');
    return inputRef.classList.add('valid');
  }
  inputRef.classList.remove('valid');
  return inputRef.classList.add('invalid');
};

inputRef.addEventListener('blur', scriptValidator);
