
const button = document.getElementById('enter');
const input = document.getElementById('email');
const input2 = document.getElementById ('password');
const correctLogin = 'admin';

button.addEventListener('click', () => {
    if (input.value&&input.value === correctLogin) {
    window.location.href = 'Фильмы.html';
  }
  else {
    alert('Пароль и почта не верные');
  }
});

