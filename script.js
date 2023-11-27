const submitBtn = document.getElementById('submit-btn');
const cPassInput = document.getElementById('cpass');
const passInput = document.getElementById('pass');
submitBtn.addEventListener('click', ()=> {
    console.log('submitted')
});
cPassInput.addEventListener('input', (event) =>{
    validatePasswords(event);
});
passInput.addEventListener('input', (event) =>{
    validatePasswords(event);
});
function validatePasswords(evt){
    let errors = document.querySelectorAll(".passwd-error > p");
    if (cPassInput.value === passInput.value){
        errors.forEach(element => {
           element.textContent = "";
        });
    }
    else {
        evt.target.parentNode.lastElementChild.lastElementChild.textContent = "Error: Passwords must match."
    }
}