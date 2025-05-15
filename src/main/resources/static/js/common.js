document.addEventListener('DOMContentLoaded', function() {
    const userMenuButton = document.getElementById('userMenuButton');
    const userDropdown = document.getElementById('userDropdown');
    const loginButton = document.getElementById('loginButton');
    const loginModal = document.getElementById('loginModal');
    const closeLoginModal = document.getElementById('closeLoginModal');
    const loginForm = document.getElementById('loginForm');

    loginButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        loginModal.classList.remove('hidden');
        userDropdown.classList.toggle('hidden');
    });

    closeLoginModal.addEventListener('click', function() {
        loginModal.classList.add('hidden');
    });

    loginModal.addEventListener('click', function(e) {
        if (e.target === loginModal) {
            loginModal.classList.add('hidden');
        }
    });

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        if (email && password) {
            console.log('Login attempt with:', email);
            loginModal.classList.add('hidden');
        }
    });
    const guestMenu = document.getElementById('guestMenu');
    const userMenu = document.getElementById('userMenu');
    const isLoggedIn = false;
    if (isLoggedIn) {
        guestMenu.classList.add('hidden');
        userMenu.classList.remove('hidden');
    } else {
        guestMenu.classList.remove('hidden');
        userMenu.classList.add('hidden');
    }
    userMenuButton.addEventListener('click', function(e) {
        e.stopPropagation();
        userDropdown.classList.toggle('hidden');
    });
    document.addEventListener('click', function(e) {
        if (!userDropdown.contains(e.target) && !userMenuButton.contains(e.target)) {
            userDropdown.classList.add('hidden');
        }
    });
});