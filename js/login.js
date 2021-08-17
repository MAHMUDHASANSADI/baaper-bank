document.getElementById('login-submit').addEventListener('click', function () {
    //get user email
    const userEmailField = document.getElementById('user-email');
    const userEmail = userEmailField.value;
    //get user password
    const userPasswordField = document.getElementById('user-password');
    const userPassword = userPasswordField.value;

    //check email & pass
    if (userEmail == 'sadi69@gmail.com' && userPassword == 'sadirafa1470') {
        //connect html to html using js
        window.location.href = 'banking.html';
    }


})