const menu = document.querySelector('.nav-bars');
const navTagAndOrder = document.querySelector('.navtag-and-order');

menu.addEventListener('click', () => {
    navTagAndOrder.classList.toggle('active');
});


const pagesLink = document.querySelector('.pages-link');
const dropdown = document.querySelector('.dropdown-menu');

pagesLink.addEventListener('click', (e) => {
    e.preventDefault();
    dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
});