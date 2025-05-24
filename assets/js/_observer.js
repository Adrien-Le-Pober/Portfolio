const ratio = 0.8

let options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio
}

const bounceLeft = [
  { transform: 'translateX(-500px)', opacity: 0, offset: 0 },
  { transform: 'translateX(30px)', opacity: 1, offset: 0.8 },
  { transform: 'translateX(-10px)', offset: 0.9 },
  { transform: 'translateX(0px)', offset: 1 }
];

const bounceRight = [
  { transform: 'translateX(500px)', opacity: 0, offset: 0 },
  { transform: 'translateX(-30px)', opacity: 1, offset: 0.8 },
  { transform: 'translateX(10px)', offset: 0.9 },
  { transform: 'translateX(0px)', offset: 1 }
];

const bounceTiming = {
  duration: 600,
  easing: 'cubic-bezier(.68,-0.55,.27,1.55)'
};

let observer = new IntersectionObserver((entries) => {
  for (const entry of entries) {
    if (entry.isIntersecting) {
      const el = entry.target;
      el.classList.remove('invisible');

      if (el.className === 'presentation') {
        el.animate(bounceLeft, bounceTiming);
      }

      if (['project-1 py-5', 'project-3 py-5', 'project-5 py-5'].includes(el.className)) {
        el.animate(bounceRight, bounceTiming);
      }

      if (['project-2 py-5', 'project-4 py-5'].includes(el.className)) {
        el.animate(bounceLeft, bounceTiming);
      }

      observer.unobserve(el);
    }
  }
}, options);

[
  '.presentation',
  '.project-1',
  '.project-2',
  '.project-3',
  '.project-4',
  '.project-5'
].forEach(selector => {
  const el = document.querySelector(selector);
  if (el) observer.observe(el);
});