//Clicking the button will console log the data username, password and checkbox as an object
document.getElementById("buttonLogin").onclick = function() {

    let myUsername = document.getElementById("myUsername").value;
    let myPassword = document.getElementById("myPassword").value;

// if checkbox is checked, print true, if unchecked - false.

    let rEqual = "false";
if (document.getElementById('myCheckBox').checked) {
    rEqual = "true";
}

//print in console the data as an object.

    console.log({
        Username: myUsername,
        Password: myPassword,
        RememberMe: rEqual
    });
    
//If username or password are empty - error message as alert.

    if(myUsername.length === 0 || myPassword.length === 0) {
        alert("Please enter your username and password correctly.");
    }
}