// ======================
// KONTAK FORM
// ======================
document.querySelector('.kontak-form')?.addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Pesan Anda telah terkirim!');
    this.reset();
});

// ======================
// NAVBAR RESPONSIF
// ======================
document.addEventListener("DOMContentLoaded", () => {
    const menuBtn = document.getElementById("menu-btn");
    const menuNav = document.getElementById("menu-nav");
    let menuOpen = false;

    menuBtn.addEventListener("click", () => {
        menuOpen = !menuOpen;
        if (menuOpen) {
            menuNav.classList.remove("-translate-x-full");
            menuNav.classList.add("translate-x-0");
            menuBtn.innerHTML = `<i class="fa-solid fa-xmark"></i>`;
        } else {
            menuNav.classList.add("-translate-x-full");
            menuNav.classList.remove("translate-x-0");
            menuBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
        }
    });

    // Tutup menu saat klik link
    document.querySelectorAll("#menu-nav a").forEach(link => {
        link.addEventListener("click", () => {
            menuNav.classList.add("-translate-x-full");
            menuNav.classList.remove("translate-x-0");
            menuBtn.innerHTML = `<i class="fa-solid fa-bars"></i>`;
            menuOpen = false;
        });
    });
});


// ======================
// SMOOTH SCROLL
// ======================
const navLinks = document.querySelectorAll('nav a[href^="#"]');
navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ======================
// ANIMASI SCROLL REVEAL
// ======================
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

// ======================
// OBSERVER UNTUK SECTION
// ======================
document.addEventListener("DOMContentLoaded", () => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-fadein", "opacity-100");
                entry.target.classList.remove("opacity-0", "translate-y-10");
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => {
        section.classList.add("opacity-0", "translate-y-10", "transition-all", "duration-700");
        observer.observe(section);
    });
});

// ======================
// CARD HOVER EFFECT
// ======================
const cards = document.querySelectorAll(".shadow");
cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.classList.add("scale-105");
    });
    card.addEventListener("mouseleave", () => {
        card.classList.remove("scale-105");
    });
});

// ======================
// BUTTON RIPPLE EFFECT
// ======================
document.querySelectorAll("button, a").forEach(btn => {
    btn.addEventListener("click", function (e) {
        const ripple = document.createElement("span");
        ripple.classList.add("ripple");
        this.appendChild(ripple);

        const x = e.clientX - this.getBoundingClientRect().left;
        const y = e.clientY - this.getBoundingClientRect().top;

        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        setTimeout(() => ripple.remove(), 600);
    });
});

// ======================
// HERO TITLE ANIMATION
// ======================
document.addEventListener("DOMContentLoaded", () => {
    const title = document.querySelector(".hero-title");
    if (title) {
        title.classList.add("opacity-0", "translate-y-10");

        setTimeout(() => {
            title.classList.remove("opacity-0", "translate-y-10");
            title.classList.add("transition-all", "duration-1000", "ease-out", "translate-y-0", "opacity-100");
        }, 300);
    }
});
