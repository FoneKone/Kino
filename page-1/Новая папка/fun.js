
// import {Question} from './question'
// import {createModal, isValid} from './utils'
// import {authWithEmailAndPassword, getAuthForm} from './auth'
// import './styles.css'

// function openModal() {
//     createModal(title: 'Авторизация',getAuthForm())
// }


// function authFormHandler(event) {
//     event.preventDefault()
  
//     const btn = event.target.querySelector('button')
//     const email = event.target.querySelector('#email').value
//     const password = event.target.querySelector('#password').value
  
//     btn.disabled = true
//     authWithEmailAndPassword(email, password)
//       .then(Question.fetch)
//       .then(renderModalAfterAuth)
//       .then(() => btn.disabled = false)
//   }

// //   document.getElementById('email').onclick=function (e){
// //     alert(document.getElementById('input').value);
// //   }

const button = document.getElementById('loginButton');
const input = document.getElementById('login');
const correctLogin = 'admin';

button.addEventListener('click', () => {
    if (input.value === correctLogin) {
    window.location.href = '/info.html';
  }
  else {
    alert('login incorrect!');
  }
});