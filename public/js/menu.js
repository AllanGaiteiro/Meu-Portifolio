const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('nav ul');
const links = document.querySelectorAll('nav li');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});