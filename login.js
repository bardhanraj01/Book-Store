
const form = document.getElementById("loginForm");
const message = document.getElementById("message");

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;

    const savedUsername = localStorage.getItem("demoUsername");
    const savedPassword = localStorage.getItem("demoPassword");

    if (
        savedUsername === null ||
        savedPassword === null
    ) {
        message.style.color = "red";
        message.textContent = "Please register an account first.";
    } else if (
        username === savedUsername &&
        password === savedPassword
    ) {
        message.style.color = "green";
        message.textContent = "Login successful!";
    } else {
        message.style.color = "red";
        message.textContent = "Incorrect username or password.";
    }
});

form.addEventListener("reset", function () {
    message.textContent = "";
});
