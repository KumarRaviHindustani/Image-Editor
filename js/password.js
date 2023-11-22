function checkPassword() {
    var correctPassword = "123";
    var enteredPassword = document.getElementById("passwordInput").value;

    if (enteredPassword === correctPassword) {
        alert("Access granted! Welcome to the website.");
        document.getElementById("overlay").style.display = "none";
        document.getElementById("d-none").style.display = "block";
    } else {
        alert("Password Incorrect");
        location.reload();
    }
}