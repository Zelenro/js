const decrementBtnRef = document.querySelector('[data-action="decrement"]');
const incrementBtnRef = document.querySelector('[data-action="increment"]');
const counterValueRef = document.querySelector('#value');

let counterValue = 0;

const handleClickDecrement = e =>
  (counterValueRef.textContent = counterValue -= 1);

const handleClickIncrement = () =>
  (counterValueRef.textContent = counterValue += 1);

decrementBtnRef.addEventListener('click', handleClickDecrement);
incrementBtnRef.addEventListener('click', handleClickIncrement);
