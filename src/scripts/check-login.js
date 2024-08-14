// const post = document.getElementById('post-blog-option');
// const login = document.getElementById('login-button');
// const logout = document.getElementById('logout-button');

// function checkLoginStatus() {
//     try {
//         // logged in
//         if (sessionStorage.getItem('isLoggedIn') === 'true') {
//             post.classList.remove('hidden');
//             post.classList.add('block');
//             login.classList.remove('block');
//             login.classList.add('hidden');
//             logout.classList.remove('hidden');
//             logout.classList.add('block');
//         } else {
//             // logged out
//             post.classList.remove('block');
//             post.classList.add('hidden');
//             login.classList.remove('hidden');
//             login.classList.add('block');
//             logout.classList.remove('block');
//             logout.classList.add('hidden');
//         }
//     } catch (error) {
//         console.error('Error checking login status:', error);
//         alert('Error!');
//     }
// }

// function handleLogout() {
//     sessionStorage.setItem('isLoggedIn', 'false'); 
//     checkLoginStatus(); 
// }

// if (logout) {
//     logout.addEventListener('click', handleLogout);
// }
// document.addEventListener('DOMContentLoaded', checkLoginStatus);
