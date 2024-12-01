document.getElementById("loginForm").addEventListener("submit", function(event) {
    const email = document.getElementById("email");
    const emailError = document.getElementById("emailError");

    if (!email.value) {
        emailError.style.display = "block";
        event.preventDefault();
    } else {
        emailError.style.display = "none";
    }
});