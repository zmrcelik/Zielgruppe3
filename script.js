document.addEventListener("DOMContentLoaded", () => {
  const gallery = document.querySelector('.cta-section .baklava-gallery');
  const items = document.querySelectorAll('.cta-section .baklava-item');
  const nextBtn = document.querySelector('.cta-section .slider-btn.next');
  const prevBtn = document.querySelector('.cta-section .slider-btn.prev');

  let index = 0;

  function updateSlider() {
    if (window.innerWidth <= 768) {
      gallery.style.transform = `translateX(-${index * 100}%)`;
      prevBtn.style.display = index === 0 ? 'none' : 'block';
      nextBtn.style.display = index === items.length - 1 ? 'none' : 'block';
    } else {
      gallery.style.transform = 'translateX(0)';
      prevBtn.style.display = 'none';
      nextBtn.style.display = 'none';
    }
  }

  nextBtn.addEventListener('click', () => {
    if (index < items.length - 1) {
      index++;
      updateSlider();
    }
  });

  prevBtn.addEventListener('click', () => {
    if (index > 0) {
      index--;
      updateSlider();
    }
  });

  window.addEventListener('resize', () => {
    index = 0; // Reset Slider beim Resize
    updateSlider();
  });

  updateSlider();
});
// Burger-Menü Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');

menuToggle.addEventListener('click', () => {
navLinks.classList.toggle('show');
});
document.addEventListener("DOMContentLoaded", () => {
const elements = document.querySelectorAll('.scroll-reveal');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Verzögere das Hinzufügen der Klasse nach Index im NodeList
      const delay = Array.from(elements).indexOf(entry.target) * 70; 
      setTimeout(() => {
        entry.target.classList.add('active');
      }, delay);
    } else {
      entry.target.classList.remove('active');
    }
  });
}, { threshold: 0.05 });

elements.forEach(el => observer.observe(el));
});
const gallery = document.querySelector('.baklava-gallery');
const dots = document.querySelectorAll('.slider-dots .dot');

gallery.addEventListener('scroll', () => {
const slideWidth = gallery.offsetWidth;
const index = Math.round(gallery.scrollLeft / slideWidth);

dots.forEach(dot => dot.classList.remove('active'));
if (dots[index]) dots[index].classList.add('active');
});

