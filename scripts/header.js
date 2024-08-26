'use strict';

const nav = document.querySelector('.navbar');
const header = document.querySelector('.header');

export const section1 = document.querySelector('.main__about__history');
const exploreMoreBtn = document.querySelector('.explore__more--btn');

const closeBtn = document.querySelector('.close__btn');
const menuBtn = document.querySelector('.menu__btn');

exploreMoreBtn.addEventListener('click', () =>
  section1.scrollIntoView({ behavior: 'smooth' })
);

// Sticky Nav
const navHeight = nav.getBoundingClientRect().height;

const stickyNav = entries => {
  const [entry] = entries;

  if (!entry.isIntersecting) {
    nav.classList.add('sticky');
  } else {
    nav.classList.remove('sticky');
  }
};

const observer = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

observer.observe(header);

const handleHover = (e, opacity) => {
  if (e.target.classList.contains('navbar__link')) {
    const link = e.target;
    const siblings = link.closest('nav').querySelectorAll('.navbar__link');
    const logo = link.closest('nav').querySelector('.logo');

    siblings.forEach(sibling => {
      if (sibling !== link) sibling.style.opacity = opacity;
    });
    logo.style.opacity = opacity;
  }
};

nav.addEventListener('mouseover', e => handleHover.bind(handleHover(e, 0.5)));
nav.addEventListener('mouseout', e => handleHover.bind(handleHover(e, 1)));

nav.addEventListener('click', e => {
  e.preventDefault();

  if (e.target.classList.contains('navbar__link')) {
    const id = e.target.getAttribute('href');
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

menuBtn.addEventListener('click', () => {
  document.querySelector('menu').style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  document.querySelector('menu').style.display = 'none';
});
