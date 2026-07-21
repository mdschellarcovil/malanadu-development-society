const toggle = document.querySelector('.menu-toggle');
const body = document.body;

if (toggle) {
  toggle.addEventListener('click', () => {
    body.classList.toggle('nav-open');
  });
}

const navLinks = document.querySelectorAll('.site-nav a');
navLinks.forEach((link) => {
  link.addEventListener('click', () => {
    body.classList.remove('nav-open');
  });
});

const revealElements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('revealed');
          obs.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.16 }
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('revealed'));
}
