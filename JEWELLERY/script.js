// const form1=document.getElementById('login');
// const form2=document.getElementById('signup');
// // const form3=document.getElementById('b');

// form1.addEventListener('submit',e=>{
//     e.preventDefault();
//    emailcheck();
//    Passcheck();
  
// });
// form2.addEventListener('submit',e=>{
//     e.preventDefault();
//     name1check();
//   email1check();
//   Pass1check()
// Pass2check();
// });

// const emailerror =document.getElementById('email-error');
// document.getElementById('email-error').style.color='red';
// function emailcheck(){
//     const Email=document.getElementById('email').value;
// if(Email.length==0){
// emailerror.innerHTML = 'This field is required';
// return false;
// }
// const pattern= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//  if(!Email.match(pattern)){
// emailerror.innerHTML = 'Please enter a valid email address (Ex: johndoe@domain.com)';
// return false;
// }
// }
// const passworderror =document.getElementById('password-error');
// document.getElementById('password-error').style.color='red';
// function Passcheck(){
//     const password=document.getElementById('pass').value;
//     const passwordvalue=pass.value.trim();

// if(password.length==0){
// passworderror.innerHTML = 'This field is required';
// return false;
// }
//  if(password.length!==8){
// passworderror.innerHTML = 'Password must be 8 characters';
// return false;

// }

// if(password.match(/\s/g)){
//     passworderror.innerHTML = 'Password must be 8 characters';
// return false;
// }
// let c = document.querySelector(".login2");
//   let d = document.querySelector(".popup");
//   c.addEventListener(
//     "click",
//     function () {
//       d.style.display = "none";
//     },
//     { once: true }
//   );
//  }

// const nameerror1 =document.getElementById('name-error1');
// document.getElementById('name-error1').style.color='red';
// function name1check(){
//     const Name=document.getElementById('name1').value;
// if(Name.length==0){
// nameerror1.innerHTML = 'This field is required';
// return false;
// }
// const pattern=/^[A-Za-z ]*$/;
//  if(!Name.match(pattern)){
// nameerror1.innerHTML = 'Please use only letters (a-z or A-Z) spaces only in this field.';
// return false;
// }
// }
// const emailerror1 =document.getElementById('email-error1');
// document.getElementById('email-error1').style.color='red';
// function email1check(){
//     const Email=document.getElementById('email1').value;
// if(Email.length=='0'||Email.length==''){
// emailerror1.innerHTML = 'This field is required';
// return false;
// }
// const pattern= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
//  if(!Email.match(pattern)){
// emailerror1.innerHTML = 'Please enter a valid email address (Ex: johndoe@domain.com)';
// return false;
// }
// }
// const passworderror1 =document.getElementById('password1-error');
// document.getElementById('password1-error').style.color='red';
// function Pass1check(){
//     const password1=document.getElementById('pass1').value;
//     // const passwordvalue=pass.value.trim();

// if(password1.length==0){
// passworderror1.innerHTML = 'This field is required';
// return false;
// }
//  else if(password1.length!==8){
// passworderror1.innerHTML = 'Password must be 8 characters';
// return false;
// }


// }
// const passworderror2 =document.getElementById('password2-error');
// document.getElementById('password2-error').style.color='red';
// function Pass2check(){
//     const password2=document.getElementById('pass2').value;
//     const password1=document.getElementById('pass1').value;
//     if(password2.length==0){
//         passworderror2.innerHTML = 'This field is required';
//         return false;
//         }
    

// if(password1!==password2){
//     passworderror2.innerHTML='Please enter the same value again.';
// }
// let btn = document.querySelector(".sign1");
// let a = document.querySelector(".popup");
// btn.addEventListener(
//   "click",
//   function () {
//     a.style.display = "none";
//   },
//   { once: true }
// );
//   }

//   const singupBtn = document.querySelector(".signupbtn");
//   const loginBtn = document.querySelector(".loginbtn");
//   const moveBtn = document.querySelector(".btn");
//   const signup = document.querySelector(".sign");
//   const login = document.querySelector(".log");
  
//   loginBtn.addEventListener("click", () => {
//     moveBtn.classList.remove("btn2");
//     login.classList.add("log");
//     signup.classList.remove("signup");
//     moveBtn.innerHTML = "Log In";
//   });
  
//   singupBtn.addEventListener("click", () => {
//     moveBtn.classList.add("btn2");
//     login.classList.remove("log");
//     signup.classList.add("signup");
//     moveBtn.innerHTML = "Sign Up";
//   });
  
  
//   let closebtn = document.querySelector(".close");
//    let loginbtn = document.querySelector(".login2");
//    let popup = document.querySelector(".popup");
//    let signbtn=document.querySelector(".sign1");
//   closebtn.onclick = function () {
//     popup.style.display = "none";
//   };
  
//     if(localStorage.getItem("login")) {
//     popup.style.display = "none";
//     } else{
//       popup.style.display = "block";
//     }
    
//   loginbtn.addEventListener("click", () => {
//     popup.classList.remove("active");
//     localStorage.setItem("login", "yes");
//   });

//   if(localStorage.getItem("signup")) {
//     popup.style.display = "none";
//     } else{
//    popup.style.display = "block";
//     }
//   signbtn.addEventListener("click", () => {
//     popup.classList.remove("active");
//     localStorage.setItem("signup", "true");
//   });
  
  
// //   setTimeout(()=>{
// //         popup.style.display="block";
// // }, 5000);
  
    
 
// // let btn = document.querySelector('.sign1');
// // let a=document.querySelector('.popup');
// // btn.addEventListener("click", function() {
// //     a.style.display = "none";
   

// // }, {once : true});
// // }

// // const singupBtn = document.querySelector(".signupbtn");
// // const loginBtn = document.querySelector(".loginbtn");
// // const moveBtn = document.querySelector(".btn");
// // const signup = document.querySelector(".sign");
// // const login = document.querySelector(".log");

// // loginBtn.addEventListener("click",()=>{
// //     moveBtn.classList.remove("btn2");
// //      login.classList.add("log");
// //     signup.classList.remove("signup");
// //     moveBtn.innerHTML = "Log In";
   
   
// // })

// // singupBtn.addEventListener("click",()=>{
// //     moveBtn.classList.add("btn2");
// //     login.classList.remove("log");
// //     signup.classList.add("signup");
// //     moveBtn.innerHTML = "Sign Up";
    
// // })
// // let popup = document.querySelector(".popup");
// // let closebtn = document.querySelector(".close");

// // closebtn.onclick=function(){
// // 	popup.style.display = "none";
// // }
// //  setTimeout(()=> {
// //        popup.classList.add("show");
// //     }, 5000);

// // // const c=document.querySelector('.close');
// // // const data=document.querySelector('.popup');
// // // c.addEventListener('click',function(){
// // //     data.classList.remove("active");
// // //    localStorage.setItem("accepted","yes");
// // // })
// // // setTimeout(function() {
// // //     const accepted=localStorage.getItem("accepted");
// // //     if(accepted!=="yes"){
// // //     data.classList.add('active');
// // //     }
// // //  }, 5000)


const form1=document.getElementById('login');
const form2=document.getElementById('signup');
// const form3=document.getElementById('b');

form1.addEventListener('submit',e=>{
    e.preventDefault();
   emailcheck();
   Passcheck();
  
});
form2.addEventListener('submit',e=>{
    e.preventDefault();
    name1check();
  email1check();
  Pass1check()
Pass2check();
});


const emailerror = document.getElementById("email-error");
document.getElementById("email-error").style.color = "red";
function emailcheck() {
  const Email = document.getElementById("email").value;
  if (Email.length == 0) {
    emailerror.innerHTML = "This field is required";
    return false;
  }
  const pattern =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!Email.match(pattern)) {
    emailerror.innerHTML =
      "Please enter a valid email address (Ex: johndoe@domain.com)";
    return false;
  }
}
const passworderror = document.getElementById("password-error");
document.getElementById("password-error").style.color = "red";
function Passcheck() {
  const password = document.getElementById("pass").value;
  const passwordvalue = pass.value.trim();

  if (password.length == 0) {
    passworderror.innerHTML = "This field is required";
    return false;
  }
  if (password.length !== 8) {
    passworderror.innerHTML = "Password must be 8 characters";
    return false;
  }

  if (password.match(/\s/g)) {
    passworderror.innerHTML = "Password must be 8 characters";
    return false;
  }
  let c = document.querySelector(".login2");
  let d = document.querySelector(".popup");
  c.addEventListener(
    "click",
    function () {
      d.style.display = "none";
    },
    { once: true }
  );
}

const nameerror1 = document.getElementById("name-error1");
document.getElementById("name-error1").style.color = "red";
function name1check() {
  const Name = document.getElementById("name1").value;
  if (Name.length == 0) {
    nameerror1.innerHTML = "This field is required";
    return false;
  }
  const pattern = /^[A-Za-z ]*$/;
  if (!Name.match(pattern)) {
    nameerror1.innerHTML =
      "Please use only letters (a-z or A-Z) spaces only in this field.";
    return false;
  }
}
const emailerror1 = document.getElementById("email-error1");
document.getElementById("email-error1").style.color = "red";
function email1check() {
  const Email = document.getElementById("email1").value;
  if (Email.length == "0" || Email.length == "") {
    emailerror1.innerHTML = "This field is required";
    return false;
  }
  const pattern =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!Email.match(pattern)) {
    emailerror1.innerHTML =
      "Please enter a valid email address (Ex: johndoe@domain.com)";
    return false;
  }
}
const passworderror1 = document.getElementById("password1-error");
document.getElementById("password1-error").style.color = "red";
function Pass1check() {
  const password1 = document.getElementById("pass1").value;
  // const passwordvalue=pass.value.trim();

  if (password1.length == 0) {
    passworderror1.innerHTML = "This field is required";
    return false;
  } else if (password1.length !== 8) {
    passworderror1.innerHTML = "Password must be 8 characters";
    return false;
  }
}
const passworderror2 = document.getElementById("password2-error");
document.getElementById("password2-error").style.color = "red";
function Pass2check() {
  const password2 = document.getElementById("pass2").value;
  const password1 = document.getElementById("pass1").value;
  if (password2.length == 0) {
    passworderror2.innerHTML = "This field is required";
    return false;
  }

  if (password1 !== password2) {
    passworderror2.innerHTML = "Please enter the same value again.";
  }
  let btn = document.querySelector(".sign1");
  let a = document.querySelector(".popup");
  btn.addEventListener(
    "click",
    function () {
      a.style.display = "none";
    },
    { once: true }
  );
}

const singupBtn = document.querySelector(".signupbtn");
const loginBtn = document.querySelector(".loginbtn");
const moveBtn = document.querySelector(".btn");
const signup = document.querySelector(".sign");
const login = document.querySelector(".log");

loginBtn.addEventListener("click", () => {
  moveBtn.classList.remove("btn2");
  login.classList.add("log");
  signup.classList.remove("signup");
  moveBtn.innerHTML = "Log In";
});

singupBtn.addEventListener("click", () => {
  moveBtn.classList.add("btn2");
  login.classList.remove("log");
  signup.classList.add("signup");
  moveBtn.innerHTML = "Sign Up";
});

let popup = document.querySelector(".popup");
let closebtn = document.querySelector(".close");

closebtn.onclick = function () {
  popup.style.display = "none";
};

  if (localStorage.getItem("submit")) {
  popup.style.display = "none";
  } else{

    popup.style.display = "block";
  }

let closeButton = document.querySelector(".close");

closeButton.addEventListener("click", () => {
  popup.classList.remove("active");
  localStorage.setItem("submit", "yes");
});
 
