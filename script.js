const topnav = document.getElementById('topnav');
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
  const past = window.scrollY > window.innerHeight * 0.6;
  topnav.classList.toggle('visible', past);
  backToTop.classList.toggle('visible', past);
});

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) entry.target.classList.add('visible');
  });
}, { threshold: 0.15 });

document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
