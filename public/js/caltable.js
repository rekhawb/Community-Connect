
const btn = document.querySelectorAll('.btn');
var idVal = 0;


btn.forEach(link => link.addEventListener('click', (e) => {
   e.stopPropagation();
    const nameMonth = link.innerHTML;

    //alert(`${nameMonth} button was clicked!`);
  //  createTable();
 

//callFetch(nameMonth);
document.location.replace(`/api/calevent/month/${nameMonth}`);

}));


function createTable()
{
    document.getElementById('myTable').innerHTML="";
rn = 7;
cn = 7;
  
 for(var r=0;r<parseInt(rn,10);r++)
  {
   var x=document.getElementById('myTable').insertRow(r);
   for(var c=0;c<parseInt(cn,10);c++)  
    {
        
        if(r ==0){
     var y=  x.insertCell(c);
     if(c==0){
        y.innerHTML="Sunday"; 
        y.setAttribute('id',1);
     }else  if(c==1){
        y.innerHTML="Monday"; 
     }else if(c==2){
        y.innerHTML="Tuesday"; 
     }else  if(c==3){
        y.innerHTML="Wednesday"; 
     }else  if(c==4){
        y.innerHTML="Thursday"; 
     }else  if(c==5){
        y.innerHTML="Friday"; 
     }else  if(c==6){
        y.innerHTML="Saturday"; 
     }
    
        }else{
            idVal = idVal+1;
            var y=  x.insertCell(c);

     y.innerHTML=idVal; 
        }
    }
   }
}

function callFetch(nameMonth){

    alert( JSON.stringify({ nameMonth }));
    document.location.replace(`/api/calevent/month/${nameMonth}`);
}
//document.querySelector('.btn').addEventListener('submit', newFormHandler);