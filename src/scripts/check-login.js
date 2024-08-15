const post = document.getElementById('post-blog-option');
const login = document.getElementById('login-button');
const logout = document.getElementById('logout-button');

// for index.html

function checkLoginStatus() {
    try {
       
        if (localStorage.getItem('isLoggedIn') === 'true') {
            console.log("User is logged in");

            // alert("you are logged in");
            post.classList.remove('hidden');
            post.classList.add('block');
            login.classList.remove('block');
            login.classList.add('hidden');
            logout.classList.remove('hidden');
            logout.classList.add('block');

        } else {
            console.log("User is not logged in or on a different domain");

            // alert("you are not logged in");
            post.classList.remove('block');
            post.classList.add('hidden');
            login.classList.remove('hidden');
            login.classList.add('block');
            logout.classList.remove('block');
            logout.classList.add('hidden');

        }     
    } catch (error) {
        console.error('Error checking login status:', error);
        alert('Error!');
    }
}   


function handleLogout() {
    localStorage.setItem('isLoggedIn', 'false');
    checkLoginStatus(); 
}

if (logout) {
    logout.addEventListener('click', handleLogout);
}
document.addEventListener('DOMContentLoaded', checkLoginStatus);
