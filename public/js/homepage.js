//const res = require("express/lib/response");


const btn = document.querySelectorAll('.btn');
  


btn.forEach(link => link.addEventListener('click',(e)=>{
//alert(link.getElementsByTagName('p')[0].innerHTML);
e.stopPropagation();
const nextCall = link.getElementsByTagName('p')[0].innerHTML;
//alert(nextCall);
if(nextCall === "LOGIN"){
    window.location.replace('login');
}else if(nextCall === "EVENTS"){
   window.location.assign('/api/calevent');
}else if(nextCall === "NEWSLETTER"){
    window.location.assign('/');
}else if(nextCall === "DONATE"){
    window.location.assign('/api/donation');
}else if(nextCall === "SIGN UP"){
    window.location.assign('/signup');
}else if(nextCall === "CONTACT"){
    window.location.assign('/contact');
}else if(nextCall === "HOME"){
     window.location.assign('homepage');
}else if(nextCall === "LOGOUT"){
    document.location.replace('/logout');
}



}));


