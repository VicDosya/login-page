
//Clicking the button will console log the data username, password and checkbox.
document.getElementById("buttonLogin").onclick = function() {

    let myUsername = document.getElementById("myUsername").value;
    let myPassword = document.getElementById("myPassword").value;

    if (document.getElementById('myCheckBox').checked) {
        console.log("Remember me: true");
    }
    else {
        console.log("Remember me: false");
    }

    console.log("Username: ", myUsername);
    console.log("Password: ", myPassword);

    if(myUsername.length === 0 || myPassword.length === 0) {
        alert("Please enter your username and password correctly.");
    }
}