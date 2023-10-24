export function getAuthForm() {
    return `
      <form class="mui-form" id="auth-form">
      <label for="email" class="item--aoL">Почта</lable>
      <input class="rectangle-4-1XG" type="email" id="email" required>

      <input class="rectangle-5-iwU" type="password" id="password" required>
      <label for="password" class="item--io4">Пароль</lable>
        <button
          type="submit"
          class="mui-btn mui-btn--raised mui-btn--primary"
        >
          Войти
        </button>
      </form>
      
      <button  class="group-8-eaE"><a href="Фильмы.html" target="_self">Войти </a></button>
    `
  }
  
  export function authWithEmailAndPassword(email, password) {
    const apiKey = 'AIzaSyBvi3v1Rzl50DZP8JUiCcVUQO18JlnAMdo'
    return fetch(`https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${apiKey}`, {
      method: 'POST',
      body: JSON.stringify({
        email, password,
        returnSecureToken: true
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => response.json())
      .then(data => data.idToken)
  }