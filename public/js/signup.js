



const signupFormHandler = async (event) => {
    event.preventDefault();
  
    //const name = document.querySelector('#name-signup').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const passwordR = document.querySelector('#passwordR-signup').value.trim();
    const name = document.querySelector('#name-signup').value.trim();
    const address = document.querySelector('#address-signup').value.trim();
    const phone = document.querySelector('#phone-signup').value.trim();
  
    if (email && password && passwordR) {
        if(password === passwordR){
      const response = await fetch('/api/resident/newresident', {
        method: 'POST',
        body: JSON.stringify({ name,email, password,address,phone }),
        headers: { 'Content-Type': 'application/json' },
      });
  
      if (response.ok) {
        window.location.assign('/');
      } else {
        //alert(response.statusText);
        alert(response.sqlMessage);

      }
    }
  }
};




document
.querySelector('.login-form')
.addEventListener('submit', signupFormHandler);