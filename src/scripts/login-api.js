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

//     const response = await fetch(`https://api.github.com/repos/manystarsapart/libraryofpatchouli/actions/workflows/${workflowid}/dispatches`, {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           'Authorization': `Bearer ${token}`
//         },
//         body: JSON.stringify({
//           ref: 'main',
//           inputs: {
//             username: username,
//             password: password
//           }
//         })
//       });
// })
