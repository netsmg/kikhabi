

const form = document.querySelector('.form');
const promptInput = document.getElementById('email');
const password = document.getElementById('password');
const email = document.getElementById('email');
const errorDisplay =  document.getElementById('error');
const successDisplay = document.getElementById('success');
const logDisplay =
document.getElementById('log');

const pass =['195160'];
const em ='alamin202300@gmail.com';

form.addEventListener('submit', function (e) {
    e.preventDefault();
    
     // Prevent page reload
    const prompt = promptInput.value.trim();
    const pInput = password.value.trim();
    const eInput = email.value.trim();
    errorDisplay.textContent = "";
    successDisplay.textContent = "";
    logDisplay.textContent = "";
    
    
     // Reset error message
    
    
    if(!prompt || !pInput) {
        errorDisplay.textContent = "Please enter a valid email & password";
        }       
        else {
         loggedIn();
         email.value = "";
         password.value = "";
      
    }
        
        
    
    function loggedIn() {
    if(pInput==pass && eInput==em) {
        console.log('user');
       successDisplay.textContent = `Welcome,em.value`;
        window.location.replace("profile.html");
    }else {
        console.log('error')
        logDisplay.textContent = "Error, Wrong email or password ";
    }
}
    
    
});
