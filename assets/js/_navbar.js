const toggleMenu = document.getElementById('toggle-menu');
const menu = document.getElementById('menu');
const navItems = document.getElementsByClassName('nav-item');

toggleMenu.addEventListener('click', () => {
  toggleMenu.classList.toggle('active');
  menu.classList.toggle('open');
})

for (const navItem of navItems) {
  navItem.addEventListener('click', () => {
    if (toggleMenu.classList.contains('active')) {
      console.log(navItem);
      toggleMenu.classList.remove('active');
      menu.classList.remove('open');
    }
  })
}