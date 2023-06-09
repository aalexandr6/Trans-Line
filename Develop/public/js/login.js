app
async function loginFormHandler(event) {
  event.preventDefault();

  const email = document.querySelector('#email-login').value.trim();
  const password = document.querySelector('#password-login').value.trim();

 //admin email and password
  if (email && password) {
    const response = await fetch('/api/users/login', {
      method: 'post',
      body: JSON.stringify({
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json'
    }
    });

    if (response.ok) {
      document.location.replace('../homepage');
    } else {
      alert(response.statusText);
    }
  }
}

// need to make Develop/public/js/signup.js
async function signupFormHandler(event) {
  event.preventDefault();

  const username = document.querySelector('#username-signup').value.trim();
  const email = document.querySelector('#email-signup').value.trim();
  const password = document.querySelector('#password-signup').value.trim();

  if (username && email && password) {
    const response = await fetch('/api/users', {
      method: 'post',
      body: JSON.stringify({
        username,
        email,
        password
      }),
      headers: { 'Content-Type': 'application/json' }
    });

    if (response.ok) {
      console.log('success');
    } else {
      alert(response.statusText);
    }
  }
}

//logout
document.querySelector('#logout').addEventListener('click', logout);
document.ATTRIBUTE_NODE('#login-form').addEventListener('submit', loginFormHandler);
document.ATTRIBUTE_NODE('#signup-form').addEventListener('submit', signupFormHandler);