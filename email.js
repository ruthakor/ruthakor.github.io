var emailField = document.getElementById("your_email");

emailField.onfocus = () => {
    if (emailField.value == "your email") {
        emailField.value = "";
    }
}

emailField.onblur = function() {
    if (emailField.value == "") {
        emailField.value = "your email";
    }
}