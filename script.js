// Hamburger menu
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');
hamburger.addEventListener('click', () => mobileMenu.classList.toggle('open'));
mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.remove('open')));

// Navbar scroll class
window.addEventListener('scroll', () => {
  document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 60);
});

// Randevu form
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();
  const msg = document.getElementById('formMsg');
  msg.style.display = 'block';
  this.reset();
  setTimeout(() => { msg.style.display = 'none'; }, 6000);
});

// Scroll reveal
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('[data-animate]').forEach(el => observer.observe(el));
