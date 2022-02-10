//get user email
document.getElementById('submit-button').addEventListener('click',function(){
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    console.log(userEmail);
    //get user password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    console.log(userPassword);

    //check email and password
    if(userEmail == 'bankofmaya@gmail.com' && userPassword == 'supermom'){
        window.location.href = 'banking.html';
    } 
});