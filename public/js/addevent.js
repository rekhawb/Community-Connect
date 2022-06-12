async function newFormHandler(event) {
    event.preventDefault();


    const name = document.querySelector('input[name="post-title"]').value;
    const description = document.querySelector('input[name="post-content"]').value;


  

    const response = await fetch(`/api/posts`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        description,

      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });


    if (response.ok) {
        console.log('success');
      document.location.replace('/api/posts');


      

    } else {
      alert(response.statusText);
    }
  }

  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);

