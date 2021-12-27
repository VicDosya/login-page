//Clicking the button will console log the data username, password and checkbox as an object
document.getElementById("buttonLogin").onclick = function () {

    let myUsername = document.getElementById("myUsername").value;
    let myPassword = document.getElementById("myPassword").value;
    let rememberMe = document.getElementById('myCheckBox').checked;
    let loginData = {
        Username: myUsername,
        Password: myPassword,
        RememberMe: rememberMe
    }

    //print in console the data as an object.

    console.log(loginData);

    //If username or password are empty - error message as alert.

    if (myUsername.length === 0 || myPassword.length === 0) {
        alert("Please enter your username and password correctly.");
    }
}