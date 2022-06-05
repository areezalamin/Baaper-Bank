document.getElementById('login-submit').addEventListener('click', function(){
    const emailField = document.getElementById('email-field')
    const emailFieldValue = emailField.value;

    const passwordField = document.getElementById('password-field')
    const passwordFieldValue = passwordField.value;

if (emailFieldValue == 'amitorbaap@gmail.com' && passwordFieldValue == 'amitorbaap' ){
    window.location.href = "Banking.html"
}
else{
    console.log('Please enter Email and Password which is showing below')
}
    
});
