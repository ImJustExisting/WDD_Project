const loginForm = document.getElementById("loginForm");
const loginButton = document.getElementById("login");
const loginErrorMsg = document.getElementById("login-error-msg");
const login = document.getElementById("logger");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.email.value;
    const password = loginForm.password.value;

    if (username === "example@test.com" && password === "web_dev_Test") {
        alert("You have successfully logged in.");
        login.innerHTML = "Hello"
        window.location.href = "index.html";
    } else {
        loginErrorMsg.style.opacity = 1;
    }
})
