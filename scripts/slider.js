'use strict';

// Foods slider
const controls = document.querySelectorAll('.control--0');
const items = document.querySelectorAll('.item');

let curItem = 0;
const maxItems = items.length;

controls.forEach(control => {
  control.addEventListener('click', () => {
    const isLeft = control.classList.contains('arrow-left');

    if (isLeft) {
      curItem -= 1;
    } else {
      curItem += 1;
    }

    if (curItem >= maxItems) {
      curItem = 0;
    }

    if (curItem < 0) {
      curItem = maxItems - 1;
    }

    items.forEach(item => item.classList.remove('current-item'));

    items[curItem].scrollIntoView({ inline: 'center', behavior: 'smooth' });

    items[curItem].classList.add('current-item');
  });
});
