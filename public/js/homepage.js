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
 //  window.location.assign('/api/calevent');
 window.location.assign('/api/posts/');
}else if(nextCall === "NEWS"){
    window.location.assign('/news');
}else if(nextCall === "DONATE"){
   // window.location.assign('/api/donation');
   window.location.assign('/api/donation');
}else if(nextCall === "GALLERY"){
    // window.location.assign('/api/donation');
    window.location.assign('/gallery');
 }
else if(nextCall === "SIGN UP"){
    window.location.assign('/signup');
}else if(nextCall === "CONTACT"){
    window.location.assign('/contact');
}else if(nextCall === "HOME"){
     window.location.assign('/');
}else if(nextCall === "LOGOUT"){
    document.location.replace('/logout');
}



}));


