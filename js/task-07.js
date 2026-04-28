const inputFontSizeControlRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

const scriptChangeText = e =>
  (textRef.style.fontSize = `${e.currentTarget.value}px`);

// inputFontSizeControlRef.addEventListener('change', scriptChangeText);
inputFontSizeControlRef.addEventListener('input', scriptChangeText);
