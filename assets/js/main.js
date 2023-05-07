const btnOpen = document.querySelector('#nav-open')
const btnClose = document.querySelector('#nav-close')
const nav = document.querySelector('nav')

btnOpen.onclick = ()=> {
    nav.classList.add("open")
}
btnClose.onclick = ()=> {
    nav.classList.remove("open")
}

const observer = new IntersectionObserver(entries => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        entry.target.style.animationDelay = `${index * 0.4}s`;
        entry.target.classList.add('show');
        observer.unobserve(entry.target);
      }
    });
  });
  
  const introAnimationElements = document.querySelectorAll('.intro-animation');
  introAnimationElements.forEach(el => observer.observe(el));