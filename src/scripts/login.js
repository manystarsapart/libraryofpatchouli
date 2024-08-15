const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

// for login.html

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "patchouliknowledge" && password === "magic") {
        loginErrorMsg.classList.add("opacity-0");
        loginErrorMsg.classList.remove("opacity-100");
        alert("You have successfully logged in."); 
        localStorage.setItem('isLoggedIn', 'true'); // localstorage instead of sessionstorage. more persistent
        location.reload();
        window.location.replace("/");
        
    } else {
        loginErrorMsg.classList.remove("opacity-0");
        loginErrorMsg.classList.add("opacity-100");
    }
})

function checkLoginStatus() {
    try {
       
        if (localStorage.getItem('isLoggedIn') === 'true') {
            console.log("User is logged in");
            alert("You are already logged in!");
            window.location.replace("/");
            
        } else {
            console.log("User is not logged in or on a different domain. Proceed with login");

        }     
    } catch (error) {
        console.error('Error checking login status:', error);
        alert('Error!');
    }
}   