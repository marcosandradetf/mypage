const btnMobile = document.getElementById('btn-mobile');
const btnMobile2 = document.getElementById('btn-two');
function toggleMenu() {
    const nav = document.getElementById('nav');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);
btnMobile2.addEventListener('click', toggleMenu);
