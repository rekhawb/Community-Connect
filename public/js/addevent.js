async function newFormHandler(event) {
  
    event.preventDefault();


    const name = document.querySelector('input[name="post-title"]').value;
    const event_desc = document.querySelector('input[name="post-content"]').value;
    const event_time = document.querySelector('input[name="post-time"]').value;
var event_dt = document.querySelector('input[name="post-date"]').value;

    event_dt = new Date(event_dt).toLocaleDateString('fr-CA');
    //alert(event_dt);
const description = event_desc+" - "+ "Event Time:  "+event_time;
//alert(event_desc);

  

    const response = await fetch(`/api/posts/addevent`, {
      method: 'POST',
      body: JSON.stringify({
        name,
        description,
       event_dt,
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });


    if (response.ok) {
        console.log('success');
      window.location.assign('/api/posts/all');


      

    } else {
      alert(response.statusText);
    }
  }

  
  document.querySelector('.new-post-form').addEventListener('submit', newFormHandler);

