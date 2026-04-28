const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

const script = e => {
  const value = e.currentTarget.value.trim();
  outputRef.textContent = value !== '' ? value : 'Anonymous';
};

inputRef.addEventListener('input', script);
