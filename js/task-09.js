function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const bodyRef = document.querySelector('body');
const btnChangeColorRef = document.querySelector('.change-color');
const textColorRef = document.querySelector('.color');

function handlChangeColor(e) {
  const colorText = getRandomHexColor();
  bodyRef.style.backgroundColor = `${colorText}`;
  textColorRef.textContent = colorText;
}

btnChangeColorRef.addEventListener('click', handlChangeColor);
