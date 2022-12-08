const f=document.querySelector('form');
f.addEventListener('submit',e=>{
    e.preventDefault();
   emailcheck();
   namecheck();
   numcheck();
   commentcheck();
});
const emailerror =document.getElementById('email-error');
function emailcheck(){
    const Email=document.getElementById('email1').value;
if(Email.length=='0'||Email.length==''){
emailerror.innerHTML = 'This field is required';
return false;
}
const pattern= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
 if(!Email.match(pattern)){
emailerror.innerHTML = 'Please enter a valid email address (Ex: johndoe@domain.com)';
return false;
}
}
const nameerror =document.getElementById('name-error');
function namecheck(){
    const Name=document.getElementById('name1').value;
if(Name.length=='0'||Name.length==''){
nameerror.innerHTML = 'This field is required';
return false;
}
const pattern=/^[A-Za-z ]*$/;
 if(!Name.match(pattern)){
nameerror.innerHTML = 'Please use only letters (a-z or A-Z) spaces only in this field.';
return false;
}
}
const numbererror =document.getElementById('number-error');
function numcheck(){
    const Number=document.getElementById('num').value;
 if(Number.length!='10'){
   numbererror.innerHTML='Please enter 10 characters';
   return false;
 }
 if(!Number.match(/^[0-9]*$/)){
   numbererror.innerHTML ='Please use only numerical values(0-9)';
 return false;
}
}
const commenterror =document.getElementById('comment-error');
function commentcheck(){
    const Comment=document.getElementById('comment').value;
if(Comment.length=='0'||Comment.length==''){
commenterror.innerHTML = 'This field is required';
return false;
}
}
