const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "patchouliknowledge" && password === "magic") {
        loginErrorMsg.classList.add("opacity-0");
        loginErrorMsg.classList.remove("opacity-100");
        alert("You have successfully logged in."); 
        sessionStorage.setItem('isLoggedIn', 'true');
        location.reload();
        window.location.replace("/");
        
    } else {
        loginErrorMsg.classList.remove("opacity-0");
        loginErrorMsg.classList.add("opacity-100");
    }
})
