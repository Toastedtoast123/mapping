const toggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

    toggle.addEventListener('click', () => {
      toggle.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
       toggle.classList.remove('active');
       navLinks.classList.remove('active');
      });
    });