const formRef = document.querySelector('.login-form');
formRef.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
  e.preventDefault();
  const form = e.target;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  console.log('password', password);

  if (email === '' || password === '') {
    return alert('Всі поля повинні бути заповнені!');
  }

  console.log(`Login: ${email}, Password: ${password}`);
  form.reset();
}
