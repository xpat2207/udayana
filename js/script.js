document.querySelector('.kontak-form')?.addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Pesan Anda telah terkirim!');
    this.reset();
});

// Scroll smooth untuk navigasi
const navLinks = document.querySelectorAll('nav a[href^="#"]');
navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Animasi on scroll
function revealOnScroll() {
    const fadeEls = document.querySelectorAll('.animate-fadein, .animate-slideup');
    fadeEls.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight - 60) {
            el.classList.add('visible');
        }
    });
}
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('DOMContentLoaded', revealOnScroll);
