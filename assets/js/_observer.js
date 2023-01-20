const ratio = 0.5

let options = {
  root: null,
  rootMargin: '0px',
  threshold: ratio
}

let observer = new IntersectionObserver((entries) => {
  console.log(entries);
  for (const entry of entries) {
    if (entry.target.className === 'presentation' && entry.isIntersecting) {
      entry.target.animate([
        {transform: 'translateX(-500px)', opacity: 0},
        {transform: 'translateX(0px)', opacity: 1},
      ], {
        duration: 300
      })
      observer.unobserve(entry.target);
    }
    if (entry.target.className === 'project-1 py-5' && entry.isIntersecting) {
      entry.target.animate([
        {transform: 'translateX(500px)', opacity: 0},
        {transform: 'translateX(0px)', opacity: 1},
      ], {
        duration: 300
      })
      observer.unobserve(entry.target);
    }
    if (entry.target.className === 'project-2 py-5' && entry.isIntersecting) {
      entry.target.animate([
        {transform: 'translateX(-500px)', opacity: 0},
        {transform: 'translateX(0px)', opacity: 1},
      ], {
        duration: 300
      })
      observer.unobserve(entry.target);
    }

  }
})

observer.observe(document.querySelector('.presentation'));
observer.observe(document.querySelector('.project-1'));
observer.observe(document.querySelector('.project-2'));