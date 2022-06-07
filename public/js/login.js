

const loginFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();
  
    if (email && password) {
      const response = await fetch('/api/resident/login', {
        method: 'POST',
        body: JSON.stringify({ email, password }),
        headers: { 'Content-Type': 'application/json' },
      });
  /*
response.json().then( (data) => {
    
   let user = data.user;
   alert(user.loggedIn);

})*/

      if (response.ok) {
       
        document.location.replace('/api/calevent');
    //   process.exit(0);
      } else {
        alert('Failed to log in');
      }
    }
  };



document
.querySelector('.login-form')
.addEventListener('submit', loginFormHandler);