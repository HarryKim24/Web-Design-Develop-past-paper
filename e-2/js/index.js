const menus = document.querySelectorAll('.nav > ul > li');

menus.forEach(menu => {
  menu.addEventListener('mouseover', () =>{
    const submenu = menu.querySelector('.submenu');
    submenu.style.height = '174px';
  })
})

menus.forEach(menu => {
  menu.addEventListener('mouseout', () =>{
    const submenu = menu.querySelector('.submenu');
    submenu.style.height = '0';
  })
})

const popupBtn = document.querySelector('.popupBtn');
const closeBtn = document.querySelector('.closeBtn')
const modal = document.querySelector('.popup');

popupBtn.addEventListener('click', (e) => {
  e.preventDefault();

  modal.style.display = 'flex';
})

closeBtn.addEventListener('click', (e) => {
  e.preventDefault();

  modal.style.display = 'none';
})


let currentIndex = 0;
const slider = document.querySelector('.slider');

setInterval(() => {
  currentIndex++;
  slider.style.marginTop = -currentIndex * 800 + 'px';
  slider.style.transition = '1s ease';

  if (currentIndex == 3) {
    setTimeout(() => {
      currentIndex = 0;
      slider.style.marginTop = '0px';
      slider.style.transition = '0s';
    }, 1000);
  }
}, 1500);
