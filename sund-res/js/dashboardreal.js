const menuIcon = document.getElementById('menu-icon');
const dropdown = document.getElementById('dropdown');
const menuSection = document.getElementById('menu');

menuIcon.addEventListener('click', () => {
  dropdown.style.display = dropdown.style.display === 'flex' ? 'none' : 'flex';
});

document.addEventListener('click', (e) => {
  if (!menuIcon.contains(e.target) && !dropdown.contains(e.target)) {
    dropdown.style.display = 'none';
  }
});


window.addEventListener('scroll', () => {
  const menuPosition = menuSection.getBoundingClientRect().top;
  const screenPosition = window.innerHeight;

  if (menuPosition < screenPosition) {
    menuSection.classList.add('show');
  }
});