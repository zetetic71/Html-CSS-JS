// JavaScript для анимации меню
const menuToggle = document.getElementById('menu-toggle');
const menuBtn = document.querySelector('.menu-btn');

menuToggle.addEventListener('change', function() {
  if (this.checked) {
    menuBtn.classList.add('open');
  } else {
    menuBtn.classList.remove('open');
  }
});