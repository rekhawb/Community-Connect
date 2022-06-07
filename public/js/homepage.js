//const res = require("express/lib/response");


const btn = document.querySelectorAll('.btn');
  


btn.forEach(link => link.addEventListener('click',(e)=>{
//alert(link.getElementsByTagName('p')[0].innerHTML);
e.stopPropagation();
const nextCall = link.getElementsByTagName('p')[0].innerHTML;
//alert(nextCall);
if(nextCall === "LOGIN"){
    document.location.replace('login');
}else if(nextCall === "EVENTS"){
   document.location.replace('/api/calevent');
}else if(nextCall === "NEWSLETTER"){
    document.location.replace('/');
}else if(nextCall === "DONATE"){
    document.location.replace('/api/donation');
}else if(nextCall === "SIGN UP"){
    document.location.replace('/signup');
}else if(nextCall === "CONTACT"){
    document.location.replace('/contact');
}else if(nextCall === "HOME"){
    document.location.replace('homepage');
}else if(nextCall === "LOGOUT"){
    document.location.replace('login');
}



}));


