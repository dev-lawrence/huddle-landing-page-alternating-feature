const upBtn = document.querySelector('.up-btn');

// show button on scroll
const showBtn = () => {
  const scroll = window.scrollY;

  if (scroll > 700) {
    upBtn.classList.add('toTopBtn');
  } else {
    upBtn.classList.remove('toTopBtn');
  }
};

// got to top
const toTop = () => {
  scrollTo(0, 0);
};

// add event listener to button
window.addEventListener('scroll', showBtn);
upBtn.addEventListener('click', toTop);
