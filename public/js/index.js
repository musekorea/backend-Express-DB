const scrollPos = document.addEventListener('scroll', (e) => {
  moveNav(e.path[1].scrollY);
});

const header = document.querySelector('header');

function moveNav(e) {
  if (e > 100) {
    header.classList.add(`changeHeader`);
  } else {
    header.classList.remove('changeHeader');
  }
}
