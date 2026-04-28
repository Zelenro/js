function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const ref = {
  divBoxesRef: document.querySelector('#boxes'),
  controlsRef: document.querySelector('#controls'),
  inputRef: document.querySelector('input'),
};

ref.controlsRef.addEventListener('click', controlFn);

function createBoxes(amount) {
  let sizeBox = 30;
  for (let i = 1; i <= amount; i += 1) {
    const boxEl = document.createElement('div');
    boxEl.style.height = `${sizeBox}px`;
    boxEl.style.width = `${sizeBox}px`;
    boxEl.style.background = getRandomHexColor();
    ref.divBoxesRef.append(boxEl);
    sizeBox += 10;
  }
}

function controlFn(e) {
  const host = e.currentTarget;
  const el = e.target;
  const numberInputRef = host.querySelector('[type=number]');
  const amount = Number(numberInputRef.value);
  if (el.matches('button[data-create]')) {
    return createBoxes(amount);
  } else if (el.matches('button[data-destroy]')) {
    ref.divBoxesRef.replaceChildren();
    ref.inputRef.value = '';
  }
}
