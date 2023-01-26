
const email = document.querySelector('#email');
const password = document.querySelector('#password');
const body = document.querySelector('#body')

 email.addEventListener('focus',()=>{
    email.style.borderColor = "#831574";    
});

email.addEventListener('blur',()=>{
    email.style.borderColor = "rgb(114, 112, 112)";    
});

password.addEventListener('focus',()=>{
    password.style.borderColor = "#831574";
   
});    

password.addEventListener('blur',()=>{
    password.style.borderColor = "rgb(114, 112, 112)";
   
});   


