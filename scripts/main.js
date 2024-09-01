'use strict';

import { section1 } from './header.js';
import { wineBeers, cocktails } from './data.js';

const drinksSection = document.querySelector('.main__drinks');

const aboutUs = document.querySelector('.main__about__us__section');
const history = document.querySelector('.main__our_hsitory__section');

const wineBeerSection = document.querySelector('.main__drink--wine_beer');
const cocktailsSection = document.querySelector('.main__drink--cocktails');

const about = [aboutUs, history];
const drinks = [wineBeerSection, cocktailsSection];

// Reveal Sections
const revealSectionsObserver = (section, threshold = 0, sectionsArr) => {
  const revealSections = entries => {
    const [secRight, secLeft] = [...sectionsArr];

    entries.forEach(entry => {
      if (entry.isIntersecting) {
        secRight.classList.add('right__show');
        secLeft.classList.add('left__show');
      } else {
        secRight.classList.remove('right__show');
        secLeft.classList.remove('left__show');
      }
    });
  };

  const observer = new IntersectionObserver(revealSections, {
    root: null,
    threshold,
  });

  observer.observe(section);
};

document.querySelectorAll('.main_know_more_btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document
      .querySelector('#section--3')
      .scrollIntoView({ behavior: 'smooth' });
  });
});

// Drinks section
const generateDrinks = (array, sect) => {
  array.map(drink => {
    const section = document.createElement('section');
    section.classList.add('drink');

    const h5 = document.createElement('h5');
    h5.classList.add('drink__name');
    h5.textContent = `${drink.drinkName}`;

    const span = document.createElement('span');
    span.classList.add('drink__price');
    span.textContent = `${drink.drinkPrice} MT`;

    const p = document.createElement('p');
    p.textContent = `${drink.drinkP}`;

    section.appendChild(h5);
    section.appendChild(span);
    section.appendChild(p);

    sect.appendChild(section);
  });
};

// const revealChefSection = entries => {
//   const [entry] = entries;

//   if (!entry.isIntersecting) return;

//   entry.target.classList.remove('section--hidden');
// };

// const chefObserver = new IntersectionObserver(revealChefSection, {
//   root: null,
//   threshold: 0.25,
// });

// chefObserver.observe(chefSection);

const init = () => {
  revealSectionsObserver(section1, 0.2, about);
  revealSectionsObserver(drinksSection, 0.1, drinks);

  generateDrinks(wineBeers, wineBeerSection);
  generateDrinks(cocktails, cocktailsSection);
};

init();
