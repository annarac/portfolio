const hamburger = document.querySelector('.hamburger'),
     submenu = document.querySelector('.submenu'),
     close = document.querySelector('.submenu__close');

hamburger.addEventListener('click', () => {
    submenu.classList.add('active');
});

close.addEventListener('click', () => {
    submenu.classList.remove('active');
});