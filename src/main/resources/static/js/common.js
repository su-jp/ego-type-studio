document.addEventListener('DOMContentLoaded', function() {
    const userMenuButton = document.getElementById('userMenuButton');
    const userDropdown = document.getElementById('userDropdown');

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