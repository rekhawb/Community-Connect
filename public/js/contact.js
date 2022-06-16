

const contactFormHandler = async (event) => {
    event.preventDefault();
  
    const email = document.querySelector('#email').value.trim();
    alert(email);
    const contact = document.querySelector('#contact').value.trim();
    alert(contact);
    const message = document.querySelector('#subject').value.trim();
    alert(message);
    if (email && message) {
      const response = await fetch('/api/posts/contact', {
        method: 'POST',
        body: JSON.stringify({ email, contact,message }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (response.ok) {
       
       // window.location.assign('/api/calevent');
       alert("Message sent successfully");
       window.location.assign('/');
   
      } else {
        alert('Failed to submit message.');
      }
    }
  };



document
.querySelector('.contact-form')
.addEventListener('submit', contactFormHandler);