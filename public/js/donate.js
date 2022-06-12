


const btn = document.querySelectorAll('.btnDonate');
const btnDelete = document.querySelectorAll('.btnDelete');
//const qty = document.querySelector('#itemQty').value.trim();
  //const needed_funding = document.querySelector('#project-funding').value.trim();
  //const description = document.querySelector('#project-desc').value.trim();

  var qty = "";

var item_id = "";
var category_id = "";
var category_name = "";
var item_name = "";

btn.forEach(link => link.addEventListener('click',async(e)=>{
    //alert(link.getElementsByTagName('p')[0].innerHTML);
    e.stopPropagation();
  //  alert("clicked donate");
item_id = e.target.getAttribute('data-item');
//alert(req.session.user_id);
//category_id = e.target.parentElement.id;
alert("ItemId:"+item_id);
item_name = e.target.getAttribute('data-itemname');
alert("itemName:"+item_name)
category_id = e.target.getAttribute('data-category');
alert("categoryId:"+category_id);
category_name = e.target.getAttribute('data-categoryname');
alert("CategoryName:"+category_name);

qty = e.target.previousElementSibling.id;
alert("Item qty ID"+qty);

//qty = e.target.previousElementSibling.innerHTML;
qty = document.getElementById(qty).value;
//document.querySelector('#12').value.trim();
alert("Quantity:"+qty);


try{
const response = await fetch(`/api/donation/newcontribute`, {
    method: 'POST',
    body: JSON.stringify({category_id,category_name,item_id,item_name,qty}),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  if (response.ok) {
   // req.session.contribute = true;
    window.location.assign('/api/donation/view');
    
  } else {
    alert('Failed to add a new donation');
  }
} catch(err){
    console.log(err);
}

})
);



btnDelete.forEach(link => link.addEventListener('click',async(e)=>{
    //alert(link.getElementsByTagName('p')[0].innerHTML);
    e.stopPropagation();
    


    try{
        var participant_id = e.target.getAttribute('data-participant');
    // participant_id = e.target.id;
  //  alert("clicked donate");
//item_id = e.target.getAttribute('data-item');
alert(participant_id);
        const response = await fetch(`/api/donation/${participant_id}`, {
            method: 'DELETE'
          });
        
          if (response.ok) {
           // req.session.contribute = true;
            window.location.assign('/api/donation/view');
            
          } else {
            alert('Failed to add a new donation');
            window.location.assign('/api/donation/view');
          }
        } catch(err){
            console.log(err);
        }


})
)