// const loginForm = document.getElementById("login-form");
// const loginButton = document.getElementById("login-form-submit");
// const loginErrorMsg = document.getElementById("login-error-msg");

// loginButton.addEventListener("click", (e) => {
//     e.preventDefault();
//     const username = loginForm.username.value;
//     const password = loginForm.password.value;

//     if (username === "test" && password === "testpassword") {
//         loginErrorMsg.classList.add("opacity-0");
//         loginErrorMsg.classList.remove("opacity-100");
//         alert("You have successfully logged in.");
//         location.reload();
//     } else {
//         loginErrorMsg.classList.remove("opacity-0");
//         loginErrorMsg.classList.add("opacity-100");
//     }
// })


const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", async (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    try {
        const response = await fetch('https://dev-ayglhh0tmfu5e1bd.us.auth0.com/oauth/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                grant_type: 'password',
                username: username,
                password: password,
                audience: 'https://dev-ayglhh0tmfu5e1bd.us.auth0.com/api/v2/',
                client_id: 'qi89KlBTDddVyen1VwAWhAeC5fiSOo8T',
                client_secret: '619TXFsku7f48aM9fEpfpz8W1ijqHe3sKWrjNxLot_BhIu-O-C6pXcErbOUBtHQk'
            })
        });

        if (response.ok) {
            const data = await response.json();
            // successful login, handle the response
            console.log('Access Token:', data.access_token);
            alert("You have successfully logged in.");
            // store the token or redirect the user
        } else {
            const errorData = await response.json();
            loginErrorMsg.textContent = errorData.error_description || 'Login failed';
            loginErrorMsg.classList.remove("opacity-0");
            loginErrorMsg.classList.add("opacity-100");
        }
    } catch (error) {
        console.error('Login error:', error);
        loginErrorMsg.textContent = 'An error occurred. Please try again.';
        loginErrorMsg.classList.remove("opacity-0");
        loginErrorMsg.classList.add("opacity-100");
    }
});
